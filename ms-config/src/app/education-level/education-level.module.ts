import { EducationLevelController } from './education-level.controller';

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EducationLevelEntity } from "./education-level.entity";
import { EducationLevelService } from './education-level.service';


@Module({
    imports: [TypeOrmModule.forFeature([EducationLevelEntity])],
    controllers: [EducationLevelController],
    providers: [EducationLevelService]
  })
  export class EducationLevelModule {}