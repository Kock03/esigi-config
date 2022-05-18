import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { ProjectStatusDto } from "./dtos/create-update-projects-status.dto";
import { ProjectStatusEntity } from "./project-status.entity";


@Injectable()
export class ProjectStatusService {

    constructor(
        @InjectRepository(ProjectStatusEntity)
        private projectStatusRepository: Repository<ProjectStatusEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.projectStatusRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<ProjectStatusEntity>,
        options?: FindOneOptions<ProjectStatusEntity>,
    ) {
        try {
            return await this.projectStatusRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: ProjectStatusDto) {
        const projectStatus = this.projectStatusRepository.create(data);
        return await this.projectStatusRepository.save(projectStatus);
    }

    async update(id: string, data: ProjectStatusDto) {
        try {
            const projectStatus = await this.projectStatusRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.projectStatusRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.projectStatusRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.projectStatusRepository.softDelete({ id });
    }
}
