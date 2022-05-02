
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";

import { PaperDto } from '../paper/dtos/create-update-paper.dto';
import { RelationshipTypeDto } from "./dtos/create-update-relationship-type.dto";
import { RelationshipTypeService } from "./relationsship-type.service";

@Controller('/api/v1/relationship-type')
export class RelationshipTypeController {
  constructor(private readonly relationshipTypeService: RelationshipTypeService) { }

  @Get()
  async index() {
    return await this.relationshipTypeService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.relationshipTypeService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.relationshipTypeService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: RelationshipTypeDto,
  ) {
    return await this.relationshipTypeService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.relationshipTypeService.destroy(id);
  }

}
