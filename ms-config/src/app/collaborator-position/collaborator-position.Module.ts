import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollaboratorPositionController } from "./collaborator-position.controller";
import { CollaboratorPositionEntity } from "./collaborator-position.entity";
import { CollaboratorPositionService } from "./collaborator-position.service";

@Module({
    imports: [TypeOrmModule.forFeature([CollaboratorPositionEntity])],
    controllers: [CollaboratorPositionController],
    providers: [CollaboratorPositionService]
})
export class CollaboratorPositionModule { }
