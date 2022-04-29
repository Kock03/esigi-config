import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectStatusDto } from "./dtos/create-update-projects-status.dto";
import { ProjectStatusController } from "./project-status.controller";
import { ProjectStatusService } from "./project-status.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectStatusDto])],
  controllers: [ProjectStatusController],
  providers: [ProjectStatusService]
})
export class ProjectStatusModule { }
