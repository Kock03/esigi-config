import { MaritalStatusDto } from './dtos/create-update-marital-status.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { MaritalStatusEntity } from './marital-status.entity';

@Injectable()
export class MaritalStatusService {

    constructor(
        @InjectRepository( MaritalStatusEntity)
        private  maritalStatusRepository: Repository< MaritalStatusEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.maritalStatusRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions< MaritalStatusEntity>,
        options?: FindOneOptions< MaritalStatusEntity>,
    ) {
        try {
            return await this.maritalStatusRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: MaritalStatusDto) {
        const maritalStatus = this.maritalStatusRepository.create(data);
        return await this.maritalStatusRepository.save(maritalStatus);
    }

    async update(id: string, data: MaritalStatusDto) {
        try {
            const maritalStatus = await this.maritalStatusRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.maritalStatusRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.maritalStatusRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.maritalStatusRepository.softDelete({ id });
    }
}


