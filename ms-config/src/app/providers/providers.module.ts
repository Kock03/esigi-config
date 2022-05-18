import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { ProvidersEntity } from './providers.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forFeature([ProvidersEntity])],
  controllers: [ProvidersController],
  providers: [ProvidersService]
})
export class ProvidersModule {}