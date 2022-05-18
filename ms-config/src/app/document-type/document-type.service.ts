import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindConditions, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { DocumentTypeEntity } from "./document-type.entity";
import { DocumentTypeDto } from "./dtos/create-update-document-type";

@Injectable()
export class DocumentTypeService {

    constructor(
        @InjectRepository(DocumentTypeEntity)
        private documentTypeRepository: Repository<DocumentTypeEntity>
    ) { }

    async findAll() {
        const options: FindManyOptions = {
            order: { createdAt: 'DESC' },
        };
        return await this.documentTypeRepository.find(options);
    }

    async findOneOrFail(
        conditions: FindConditions<DocumentTypeEntity>,
        options?: FindOneOptions<DocumentTypeEntity>,
    ) {
        try {
            return await this.documentTypeRepository.findOneOrFail(
                conditions,
                options,
            );
        } catch {
            throw new NotFoundException();
        }
    }

    async store(data: DocumentTypeDto) {
        const documentType = this.documentTypeRepository.create(data);
        return await this.documentTypeRepository.save(documentType);
    }

    async update(id: string, data: DocumentTypeDto) {
        try {
            const DocumentType = await this.documentTypeRepository.findOneOrFail(
                {
                    id,
                },
            );
        } catch {
            throw new NotFoundException();
        }
        return await this.documentTypeRepository.save({ id: id, ...data });
    }

    async destroy(id: string) {
        try {
            await this.documentTypeRepository.findOneOrFail({ id });
        } catch {
            throw new NotFoundException();
        }
        return await this.documentTypeRepository.softDelete({ id });
    }
}

