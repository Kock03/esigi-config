import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { CreateRegistersDto } from "../dto/create-registers.dto";
import { UpdateRegistersDto } from "../dto/update-registers.dto";



import { GenericRegistersEntity } from "./generic-registers.entity";


@Injectable()
export class GenericRegistersService {

    constructor(
        @InjectRepository(GenericRegistersEntity)
        private genericRegistersRepository: Repository<GenericRegistersEntity>
    ) { }

    async findAll(key: string) {
        return await this.genericRegistersRepository.createQueryBuilder('generic_registers')
            .where('generic_registers.key = :key', { key: `${key}` })
            .getMany();
    }

    async findKeys(keyList: string[]) {
        try {
            return await this.genericRegistersRepository.find({
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
        conditions: FindConditions<GenericRegistersEntity>,
        options?: FindOneOptions<GenericRegistersEntity>,
    ) {
        try {
            return await this.genericRegistersRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: CreateRegistersDto) {
        const paper = this.genericRegistersRepository.create(data);
        return await this.genericRegistersRepository.save(paper);
    }

    async update(id: string, data: UpdateRegistersDto) {
        try {
            const paper = await this.genericRegistersRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.genericRegistersRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.genericRegistersRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.genericRegistersRepository.softDelete({ id });
    }
}

function In(keyList: string[]) {
    throw new Error("Function not implemented.");
}
