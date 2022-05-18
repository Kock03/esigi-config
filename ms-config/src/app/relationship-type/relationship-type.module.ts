import { RelationshipTypeController } from './relationship-type.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationshipTypeEntity } from './relationship-type.entity';
import { RelationshipTypeService } from './relationsship-type.service';


@Module({
  imports: [TypeOrmModule.forFeature([RelationshipTypeEntity])],
  controllers: [RelationshipTypeController],
  providers: [RelationshipTypeService]
})
export class RelationshipTypeModule {}