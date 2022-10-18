import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, In, Repository } from "typeorm";
import { CreateRegistersDto } from "../dto/create-registers.dto";
import { UpdateRegistersDto } from "../dto/update-registers.dto";

import { CollaboratorRegistersEntity } from "./collaborator-registers.entity";


@Injectable()
export class CollaboratorRegistersService {

    constructor(
        @InjectRepository(CollaboratorRegistersEntity)
        private collaboratorRegistersRepository: Repository<CollaboratorRegistersEntity>
    ) { }

    async findAll(key: string) {
        return await this.collaboratorRegistersRepository.createQueryBuilder('collaborator_registers')
            .where('collaborator_registers.key = :key', { key: `${key}` })
            .getMany();
    }

    async findKeys(keyList: string[]) {
        try {

            return await this.collaboratorRegistersRepository.find({
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
        conditions: FindConditions<CollaboratorRegistersEntity>,
        options?: FindOneOptions<CollaboratorRegistersEntity>,
    ) {
        try {
            return await this.collaboratorRegistersRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: CreateRegistersDto) {
        const paper = this.collaboratorRegistersRepository.create(data);
        return await this.collaboratorRegistersRepository.save(paper);
    }

    async update(id: string, data: UpdateRegistersDto) {
        try {
            const register = await this.collaboratorRegistersRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.collaboratorRegistersRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.collaboratorRegistersRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.collaboratorRegistersRepository.softDelete({ id });
    }
}