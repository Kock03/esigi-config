
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaritalStatusController } from './marital-status.controller';
import { MaritalStatusEntity } from './marital-status.entity';
import { MaritalStatusService } from './marital-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([MaritalStatusEntity])],
  controllers: [MaritalStatusController],
  providers: [MaritalStatusService]
})
export class MaritalStatusModule {}
