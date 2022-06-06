import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TechnologiesController } from "./technologies.controller";
import { TechnologiesEntity } from "./technologies.entity";
import { TechnologiesService } from "./technologies.service";

@Module({
    imports: [TypeOrmModule.forFeature([TechnologiesEntity])],
    controllers: [TechnologiesController],
    providers: [TechnologiesService]
  })
  export class TechnologiesModule { }