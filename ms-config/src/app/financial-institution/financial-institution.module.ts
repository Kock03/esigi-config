import { FinancialInstitutionService } from './financial-institution.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FinancialInstitutionController } from "./financial-institution.controller";
import { FinancialInstitutionEntity } from "./financial-institution.entity";

@Module({
    imports: [TypeOrmModule.forFeature([FinancialInstitutionEntity])],
    controllers: [FinancialInstitutionController],
    providers: [FinancialInstitutionService]
  })
  export class FinancialInstitutionModule {}