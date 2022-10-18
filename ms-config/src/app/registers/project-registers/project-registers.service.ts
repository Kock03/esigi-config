import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { CreateRegistersDto } from "../dto/create-registers.dto";
import { UpdateRegistersDto } from "../dto/update-registers.dto";


import { ProjectRegistersEntity } from "./project-registers.entity";


@Injectable()
export class ProjectRegistersService {

    constructor(
        @InjectRepository(ProjectRegistersEntity)
        private projectRegistersRepository: Repository<ProjectRegistersEntity>
    ) { }

    async findAll(key: string) {
        return await this.projectRegistersRepository.createQueryBuilder('project_registers')
            .where('project_registers.key = :key', { key: `${key}` })
            .getMany();
    }

    async findKeys(keyList: string[]) {
        try {
            return await this.projectRegistersRepository.find({
                select: [
                    'id',
                    'value',
                    'key'
                ],
                where: { key: In(keyList) },
            });
        } catch (e) {
            console.log(e);
        }
    }

    async findOneOrFail(
        conditions: FindConditions<ProjectRegistersEntity>,
        options?: FindOneOptions<ProjectRegistersEntity>,
    ) {
        try {
            return await this.projectRegistersRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: CreateRegistersDto) {
        const paper = this.projectRegistersRepository.create(data);
        return await this.projectRegistersRepository.save(paper);
    }

    async update(id: string, data: UpdateRegistersDto) {
        try {
            const paper = await this.projectRegistersRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.projectRegistersRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.projectRegistersRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.projectRegistersRepository.softDelete({ id });
    }
}

function In(keyList: string[]) {
    throw new Error("Function not implemented.");
}
