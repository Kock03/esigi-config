import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ProjectStatusController } from "./project-status.controller";
import { ProjectStatusEntity } from "./project-status.entity";
import { ProjectStatusService } from "./project-status.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectStatusEntity])],
  controllers: [ProjectStatusController],
  providers: [ProjectStatusService]
})
export class ProjectStatusModule { }
