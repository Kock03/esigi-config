import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { ProvidersDto } from './dtos/create-update-providers.dto';
import { ProvidersEntity } from './providers.entity';



@Injectable()
export class ProvidersService {

    constructor(
        @InjectRepository(ProvidersEntity)
        private providersRepository: Repository<ProvidersEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.providersRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<ProvidersEntity>,
        options?: FindOneOptions<ProvidersEntity>,
    ) {
        try {
            return await this.providersRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: ProvidersDto) {
        const Providers = this.providersRepository.create(data);
        return await this.providersRepository.save(Providers);
    }

    async update(id: string, data: ProvidersDto) {
        try {
            const Providers = await this.providersRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.providersRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.providersRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.providersRepository.softDelete({ id });
    }
}

