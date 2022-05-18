

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { TypesOfExpensesDto } from "./dtos/create-update-types-of-expenses";
import { TypesOfExpensesEntity } from "./types-of-expenses.entity";

@Injectable()
export class TypesOfExpensesService {

    constructor(
        @InjectRepository(TypesOfExpensesEntity)
        private typesOfExpensesRepository: Repository<TypesOfExpensesEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.typesOfExpensesRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<TypesOfExpensesEntity>,
        options?: FindOneOptions<TypesOfExpensesEntity>,
    ) {
        try {
            return await this.typesOfExpensesRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: TypesOfExpensesDto) {
        const TypesOfExpenses = this.typesOfExpensesRepository.create(data);
        return await this.typesOfExpensesRepository.save(TypesOfExpenses);
    }

    async update(id: string, data: TypesOfExpensesDto) {
        try {
            const TypesOfExpenses = await this.typesOfExpensesRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.typesOfExpensesRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.typesOfExpensesRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.typesOfExpensesRepository.softDelete({ id });
    }
}
