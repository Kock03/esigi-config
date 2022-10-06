import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { CreateRegistersDto } from "../dto/create-registers.dto";
import { UpdateRegistersDto } from "../dto/update-registers.dto";

import { CustomerRegistersEntity } from "./customer-registers.entity";


@Injectable()
export class CustomerRegistersService {

    constructor(
        @InjectRepository(CustomerRegistersEntity)
        private customerRegistersRepository: Repository<CustomerRegistersEntity>
    ) { }

    async findAll(key: string) {
        return await this.customerRegistersRepository.createQueryBuilder('customer_registers')
            .where('customer_registers.key = :key', { key: `${key}` })
            .getMany();
    }

    async findOneOrFail(
        conditions: FindConditions<CustomerRegistersEntity>,
        options?: FindOneOptions<CustomerRegistersEntity>,
    ) {
        try {
            return await this.customerRegistersRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: CreateRegistersDto) {
        const paper = this.customerRegistersRepository.create(data);
        return await this.customerRegistersRepository.save(paper);
    }

    async update(id: string, data: UpdateRegistersDto) {
        try {
            const paper = await this.customerRegistersRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.customerRegistersRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.customerRegistersRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.customerRegistersRepository.softDelete({ id });
    }
}