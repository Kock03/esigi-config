import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { GenderDto } from "./dtos/create-update-gender.dto";
import { GenderEntity } from "./gender.entity";

@Injectable()
export class GenderService {

    constructor(
        @InjectRepository(GenderEntity)
        private genderRepository: Repository<GenderEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.genderRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<GenderEntity>,
        options?: FindOneOptions<GenderEntity>,
    ) {
        try {
            return await this.genderRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: GenderDto) {
        const paper = this.genderRepository.create(data);
        return await this.genderRepository.save(paper);
    }

    async update(id: string, data: GenderDto) {
        try {
            const gender = await this.genderRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.genderRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.genderRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.genderRepository.softDelete({ id });
    }
}
