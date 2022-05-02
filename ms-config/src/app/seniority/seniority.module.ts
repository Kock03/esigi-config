
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeniorityController } from './seniority.controller';
import { SeniorityEntity } from './seniority.entity';
import { SeniorityService } from './seniority.service';

@Module({
  imports: [TypeOrmModule.forFeature([SeniorityEntity])],
  controllers: [SeniorityController],
  providers: [SeniorityService]
})
export class SeniorityModule {}