import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { ContractTypesEntity } from "./contract-types.entity";
import { ContractTypesDto } from "./dtos/create-update-contract-types.dto";

@Injectable()
export class ContractTypesService {

    constructor(
        @InjectRepository(ContractTypesEntity)
        private contractTypesRepository: Repository<ContractTypesEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.contractTypesRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<ContractTypesEntity>,
        options?: FindOneOptions<ContractTypesEntity>,
    ) {
        try {
            return await this.contractTypesRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: ContractTypesDto) {
        const contractTypes = this.contractTypesRepository.create(data);
        return await this.contractTypesRepository.save(contractTypes);
    }

    async update(id: string, data: ContractTypesDto) {
        try {
            const contractTypes = await this.contractTypesRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.contractTypesRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.contractTypesRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.contractTypesRepository.softDelete({ id });
    }
}
