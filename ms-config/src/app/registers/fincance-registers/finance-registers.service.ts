import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { CreateRegistersDto } from "../dto/create-registers.dto";
import { UpdateRegistersDto } from "../dto/update-registers.dto";


import { FinanceRegistersEntity } from "./finance-registers.entity";



@Injectable()
export class FinanceRegistersService {

    constructor(
        @InjectRepository(FinanceRegistersEntity)
        private financeRegistersRepository: Repository<FinanceRegistersEntity>
    ) { }

    async findAll(key: string) {
        return await this.financeRegistersRepository.createQueryBuilder('finance_registers')
            .where('finance_registers.key = :key', { key: `${key}` })
            .getMany();
    }

    async findKeys(keyList: string[]) {
        try {
            return await this.financeRegistersRepository.find({
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
        conditions: FindConditions<FinanceRegistersEntity>,
        options?: FindOneOptions<FinanceRegistersEntity>,
    ) {
        try {
            return await this.financeRegistersRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: CreateRegistersDto) {
        const paper = this.financeRegistersRepository.create(data);
        return await this.financeRegistersRepository.save(paper);
    }

    async update(id: string, data: UpdateRegistersDto) {
        try {
            const paper = await this.financeRegistersRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.financeRegistersRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.financeRegistersRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.financeRegistersRepository.softDelete({ id });
    }
}

function In(keyList: string[]) {
    throw new Error("Function not implemented.");
}
