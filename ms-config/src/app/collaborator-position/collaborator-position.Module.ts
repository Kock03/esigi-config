import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollaboratorPositionEntity } from "./collaborator-position.entity";

@Module({
    imports: [TypeOrmModule.forFeature([CollaboratorPositionEntity])],
    controllers: [],
    providers: []
})
export class CollaboratorPositionModule { }
