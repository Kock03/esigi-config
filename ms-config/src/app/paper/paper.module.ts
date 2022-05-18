import { PaperEntity } from './paper.entity';
import { Module } from '@nestjs/common';
import { PaperService } from './paper.service';
import { PaperController } from './paper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PaperEntity])],
  controllers: [PaperController],
  providers: [PaperService]
})
export class PaperModule {}
