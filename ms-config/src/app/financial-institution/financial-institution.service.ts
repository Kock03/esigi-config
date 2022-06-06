import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";  
import { FinancialInstitutionDto } from "./dtos/create-update-financial-institution.dto";
import { FinancialInstitutionEntity } from "./financial-institution.entity";

@Injectable()
export class FinancialInstitutionService {

    constructor(
        @InjectRepository(FinancialInstitutionEntity)
        private financialInstitutionRepository: Repository<FinancialInstitutionEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.financialInstitutionRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<FinancialInstitutionEntity>,
        options?: FindOneOptions<FinancialInstitutionEntity>,
    ) {
        try {
            return await this.financialInstitutionRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: FinancialInstitutionDto) {
        const financialInstitution = this.financialInstitutionRepository.create(data);
        return await this.financialInstitutionRepository.save(financialInstitution);
    }

    async update(id: string, data: FinancialInstitutionDto) {
        try {
            const FinancialInstitutio = await this.financialInstitutionRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.financialInstitutionRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.financialInstitutionRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.financialInstitutionRepository.softDelete({ id });
    }
}
