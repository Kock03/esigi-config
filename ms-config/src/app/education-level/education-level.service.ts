import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { EducationLevelDto } from "./dtos/create-update-education-level.dto";
import { EducationLevelEntity } from "./education-level.entity";


@Injectable()
export class EducationLevelService {

    constructor(
        @InjectRepository(EducationLevelEntity)
        private educationLevelRepository: Repository<EducationLevelEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.educationLevelRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<EducationLevelEntity>,
        options?: FindOneOptions<EducationLevelEntity>,
    ) {
        try {
            return await this.educationLevelRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: EducationLevelDto) {
        const EducationLevel = this.educationLevelRepository.create(data);
        return await this.educationLevelRepository.save(EducationLevel);
    }

    async update(id: string, data: EducationLevelDto) {
        try {
            const EducationLevel = await this.educationLevelRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.educationLevelRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.educationLevelRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.educationLevelRepository.softDelete({ id });
    }
}

