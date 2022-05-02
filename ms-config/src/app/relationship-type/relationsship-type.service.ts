import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { RelationshipTypeDto } from './dtos/create-update-relationship-type.dto';
import { RelationshipTypeEntity } from './relationship-type.entity';


@Injectable()
export class RelationshipTypeService {

    constructor(
        @InjectRepository(RelationshipTypeEntity)
        private relationshipTypeRepository: Repository<RelationshipTypeEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.relationshipTypeRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<RelationshipTypeEntity>,
        options?: FindOneOptions<RelationshipTypeEntity>,
    ) {
        try {
            return await this.relationshipTypeRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: RelationshipTypeDto) {
        const RelationshipType = this.relationshipTypeRepository.create(data);
        return await this.relationshipTypeRepository.save(RelationshipType);
    }

    async update(id: string, data: RelationshipTypeDto) {
        try {
            const RelationshipType = await this.relationshipTypeRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.relationshipTypeRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.relationshipTypeRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.relationshipTypeRepository.softDelete({ id });
    }
}

