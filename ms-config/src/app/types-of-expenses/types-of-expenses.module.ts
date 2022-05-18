import { TypesOfExpensesService } from './types-of-expenses.service';
import { TypesOfExpensesController } from './types-of-expenses.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypesOfExpensesEntity } from "./types-of-expenses.entity";


@Module({
    imports: [TypeOrmModule.forFeature([TypesOfExpensesEntity])],
    controllers: [TypesOfExpensesController],
    providers: [TypesOfExpensesService]
  })
  export class TypesOfExpensesModule { }