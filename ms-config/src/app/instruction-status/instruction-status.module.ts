import { InstructionStatusService } from './instruction-status.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructionStatusController } from './instruction-status.controller';
import { InstructionStatusEntity } from './instruction-status.entity';


@Module({
  imports: [TypeOrmModule.forFeature([InstructionStatusEntity])],
  controllers: [InstructionStatusController],
  providers: [InstructionStatusService]
})
export class InstructionStatusModule {}
