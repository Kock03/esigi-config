import { EducationLevelModule } from './app/education-level/education-level.module';
import { ContractTypesModule } from './app/contract-types/contract-types.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';
import { CollaboratorPositionModule } from './app/collaborator-position/collaborator-position.Module';
import { PaperModule } from './app/paper/paper.module';
import { ProjectStatusModule } from './app/project-status/project-status.module';
import { GenderModule } from './app/gender/gender.module';
import { TechnologiesModule } from './app/technologies/technologies.module';
import { MaritalStatusModule } from './app/marital-status/marital-status.module';
import { SeniorityModule } from './app/seniority/seniority.module';
import { RelationshipTypeModule } from './app/relationship-type/relationship-type.module';
import { DocumentTypeModule } from './app/document-type/document-type.module';
import { SalaryChangeReasonModule } from './app/salary-change-reason/salary-change-reason.module';
import { InstructionStatusModule } from './app/instruction-status/instruction-status.module';
import { LanguagesModule } from './app/languages/languages.module';
import { FinancialInstitutionModule } from './app/financial-institution/financial-institution.module';
import { TypesOfExpensesModule } from './app/types-of-expenses/types-of-expenses.module';
import { ProvidersModule } from './app/providers/providers.module';
import { DDIModule } from './app/ddi/ddi.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions),
    PaperModule, ProjectStatusModule, CollaboratorPositionModule, GenderModule, ContractTypesModule,
    TechnologiesModule, MaritalStatusModule, SeniorityModule, SeniorityModule, RelationshipTypeModule,
    DocumentTypeModule, EducationLevelModule, SalaryChangeReasonModule, InstructionStatusModule, LanguagesModule, 
    FinancialInstitutionModule, TypesOfExpensesModule, ProvidersModule, DDIModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
