import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GenderController } from "./gender.controller";
import { GenderEntity } from "./gender.entity";
import { GenderService } from "./gender.service";

@Module({
    imports: [TypeOrmModule.forFeature([GenderEntity])],
    controllers: [GenderController],
    providers: [GenderService]
  })
  export class GenderModule {}