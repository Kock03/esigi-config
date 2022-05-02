import { ContractTypesController } from './contract-types.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContractTypesEntity } from "./contract-types.entity";
import { ContractTypesService } from './contract-types.service';


@Module({
    imports: [TypeOrmModule.forFeature([ContractTypesEntity])],
    controllers: [ContractTypesController],
    providers: [ContractTypesService]
  })
  export class ContractTypesModule {}