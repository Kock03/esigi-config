import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { DDIEntity } from "./ddi.entity";
import { DDIDto } from "./dtos/create-update-ddi.dto";


@Injectable()
export class DDIService {

    constructor(
        @InjectRepository(DDIEntity)
        private ddiRepository: Repository<DDIEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.ddiRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<DDIEntity>,
        options?: FindOneOptions<DDIEntity>,
    ) {
        try {
            return await this.ddiRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: DDIDto) {
        const DDI = this.ddiRepository.create(data);
        return await this.ddiRepository.save(DDI);
    }

    async update(id: string, data: DDIDto) {
        try {
            const DDI = await this.ddiRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.ddiRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.ddiRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.ddiRepository.softDelete({ id });
    }
}

