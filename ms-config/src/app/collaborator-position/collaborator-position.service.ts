import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { CollaboratorPositionEntity } from "./collaborator-position.entity";
import { CollaboratorPositionDto } from "./dtos/create-update-collaborator-position.dto";

@Injectable()
export class CollaboratorPositionService {

    constructor(
        @InjectRepository(CollaboratorPositionEntity)
        private collaboratorPositionService: Repository<CollaboratorPositionEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.collaboratorPositionService.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<CollaboratorPositionEntity>,
        options?: FindOneOptions<CollaboratorPositionEntity>,
    ) {
        try {
            return await this.collaboratorPositionService.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: CollaboratorPositionDto) {
        const paper = this.collaboratorPositionService.create(data);
        return await this.collaboratorPositionService.save(paper);
    }

    async update(id: string, data: CollaboratorPositionDto) {
        try {
            const paper = await this.collaboratorPositionService.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.collaboratorPositionService.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.collaboratorPositionService.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.collaboratorPositionService.softDelete({ id });
    }
}
