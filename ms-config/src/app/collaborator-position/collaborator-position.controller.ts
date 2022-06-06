import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CollaboratorPositionService } from './collaborator-position.service';
import { CollaboratorPositionDto } from './dtos/create-update-collaborator-position.dto';

@Controller('/api/v1/collaborator-position')
export class CollaboratorPositionController {
  constructor(private readonly collaboratorPositionService: CollaboratorPositionService) { }

  @Get()
  async index() {
    return await this.collaboratorPositionService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.collaboratorPositionService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: CollaboratorPositionDto) {
    return await this.collaboratorPositionService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: CollaboratorPositionDto,
  ) {
    return await this.collaboratorPositionService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.collaboratorPositionService.destroy(id);
  }

}


