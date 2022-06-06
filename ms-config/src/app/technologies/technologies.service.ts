import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { TechnologiesDto } from "./dtos/create-update-technologies.dto";
import { TechnologiesEntity } from "./technologies.entity";


@Injectable()
export class TechnologiesService {

    constructor(
        @InjectRepository(TechnologiesEntity)
        private TechnologiesRepository: Repository<TechnologiesEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.TechnologiesRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<TechnologiesEntity>,
        options?: FindOneOptions<TechnologiesEntity>,
    ) {
        try {
            return await this.TechnologiesRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: TechnologiesDto) {
        const Technologies = this.TechnologiesRepository.create(data);
        return await this.TechnologiesRepository.save(Technologies);
    }

    async update(id: string, data: TechnologiesDto) {
        try {
            const Technologies = await this.TechnologiesRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.TechnologiesRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.TechnologiesRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.TechnologiesRepository.softDelete({ id });
    }
}
