import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { PaperDto } from './dtos/create-update-paper.dto';
import { PaperEntity } from './paper.entity';

@Injectable()
export class PaperService {

    constructor(
        @InjectRepository(PaperEntity)
        private paperRepository: Repository<PaperEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.paperRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<PaperEntity>,
        options?: FindOneOptions<PaperEntity>,
    ) {
        try {
            return await this.paperRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: PaperDto) {
        const paper = this.paperRepository.create(data);
        return await this.paperRepository.save(paper);
    }

    async update(id: string, data: PaperDto) {
        try {
            const paper = await this.paperRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.paperRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.paperRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.paperRepository.softDelete({ id });
    }
}
