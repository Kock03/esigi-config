
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { InstructionStatusDto } from './dtos/create-update-instruction-status.dto';
import { InstructionStatusEntity } from './instruction-status.entity';

@Injectable()
export class InstructionStatusService {

    constructor(
        @InjectRepository( InstructionStatusEntity)
        private  instructionStatusRepository: Repository< InstructionStatusEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.instructionStatusRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions< InstructionStatusEntity>,
        options?: FindOneOptions< InstructionStatusEntity>,
    ) {
        try {
            return await this.instructionStatusRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: InstructionStatusDto) {
        const instructionStatus = this.instructionStatusRepository.create(data);
        return await this.instructionStatusRepository.save(instructionStatus);
    }

    async update(id: string, data: InstructionStatusDto) {
        try {
            const instructionStatus = await this.instructionStatusRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.instructionStatusRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.instructionStatusRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.instructionStatusRepository.softDelete({ id });
    }
}


