import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryChangeReasonEntity } from './salary-change-reason.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalaryChangeReasonEntity])],
  controllers: [],
  providers: []
})
export class SalaryChangeReasonModule {}