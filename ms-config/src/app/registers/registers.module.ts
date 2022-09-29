import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CollaboratorRegistersEntity } from "./collaborator-registers/collaborator-registers.entity";
import { CollaboratorRegistersService } from "./collaborator-registers/collaborator-registers.service";
import { CustomerRegistersEntity } from "./customer-registers/customer-registers.entity";
import { CustomerRegistersService } from "./customer-registers/customer-registers.service";
import { FinanceRegistersEntity } from "./fincance-registers/finance-registers.entity";
import { FinanceRegistersService } from "./fincance-registers/finance-registers.service";
import { GenericRegistersEntity } from "./generic-registers/generic-registers.entity";
import { GenericRegistersService } from "./generic-registers/generic-registers.service";
import { ProjectRegistersEntity } from "./project-registers/project-registers.entity";
import { ProjectRegistersService } from "./project-registers/project-registers.service";
import { RegistersController } from "./registers.controller";

@Module({
    imports: [TypeOrmModule.forFeature([CustomerRegistersEntity]), TypeOrmModule.forFeature([CollaboratorRegistersEntity]),
    TypeOrmModule.forFeature([FinanceRegistersEntity]), TypeOrmModule.forFeature([GenericRegistersEntity]), TypeOrmModule.forFeature([ProjectRegistersEntity])],
    controllers: [RegistersController],
    providers: [CustomerRegistersService, ProjectRegistersService,
        GenericRegistersService, FinanceRegistersService, CollaboratorRegistersService]
})
export class RegistersModule { }