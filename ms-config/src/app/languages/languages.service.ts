
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { LanguagesDto } from './dtos/create-update-languages.dto';
import { LanguagesEntity } from './languages.entity';


@Injectable()
export class LanguagesService {

    constructor(
        @InjectRepository( LanguagesEntity)
        private  languagesRepository: Repository< LanguagesEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.languagesRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions< LanguagesEntity>,
        options?: FindOneOptions< LanguagesEntity>,
    ) {
        try {
            return await this.languagesRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: LanguagesDto) {
        const languages = this.languagesRepository.create(data);
        return await this.languagesRepository.save(languages);
    }

    async update(id: string, data: LanguagesDto) {
        try {
            const languages = await this.languagesRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.languagesRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.languagesRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.languagesRepository.softDelete({ id });
    }
}


