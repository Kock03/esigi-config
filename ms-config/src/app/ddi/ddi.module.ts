import { DDIService } from './ddi.service';
import { DDIController } from './ddi.controller';

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DDIEntity } from "./ddi.entity";



@Module({
    imports: [TypeOrmModule.forFeature([DDIEntity])],
    controllers: [DDIController],
    providers: [DDIService]
  })
  export class DDIModule {}