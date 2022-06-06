import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { SalaryChangeReasonDto } from './dtos/create-update-salary-change-reason.dto';
import { SalaryChangeReasonEntity } from './salary-change-reason.entity';


@Injectable()
export class SalaryChangeReasonService {

    constructor(
        @InjectRepository(SalaryChangeReasonEntity)
        private salaryChangeReasonRepository: Repository<SalaryChangeReasonEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.salaryChangeReasonRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<SalaryChangeReasonEntity>,
        options?: FindOneOptions<SalaryChangeReasonEntity>,
    ) {
        try {
            return await this.salaryChangeReasonRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: SalaryChangeReasonDto) {
        const SalaryChangeReason = this.salaryChangeReasonRepository.create(data);
        return await this.salaryChangeReasonRepository.save(SalaryChangeReason);
    }

    async update(id: string, data: SalaryChangeReasonDto) {
        try {
            const SalaryChangeReason = await this.salaryChangeReasonRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.salaryChangeReasonRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.salaryChangeReasonRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.salaryChangeReasonRepository.softDelete({ id });
    }
}

