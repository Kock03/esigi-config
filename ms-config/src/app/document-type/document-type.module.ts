import { DocumentTypeController } from './document-type.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentTypeEntity } from "./document-type.entity";
import { DocumentTypeService } from './document-type.service';


@Module({
    imports: [TypeOrmModule.forFeature([DocumentTypeEntity])],
    controllers: [DocumentTypeController],
    providers: [DocumentTypeService]
  })
  export class DocumentTypeModule {}