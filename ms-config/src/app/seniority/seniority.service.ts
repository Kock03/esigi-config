import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { SeniorityDto } from './dtos/create-update-seniority';
import { SeniorityEntity } from './seniority.entity';

@Injectable()
export class SeniorityService {

    constructor(
        @InjectRepository(SeniorityEntity)
        private seniorityRepository: Repository<SeniorityEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.seniorityRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<SeniorityEntity>,
        options?: FindOneOptions<SeniorityEntity>,
    ) {
        try {
            return await this.seniorityRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: SeniorityDto) {
        const seniority = this.seniorityRepository.create(data);
        return await this.seniorityRepository.save(seniority);
    }

    async update(id: string, data: SeniorityDto) {
        try {
            const seniority = await this.seniorityRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.seniorityRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.seniorityRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.seniorityRepository.softDelete({ id });
    }
}

