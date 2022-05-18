import { TechnologiesService } from './technologies.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { PaperDto } from '../paper/dtos/create-update-paper.dto';
import { TechnologiesDto } from './dtos/create-update-technologies.dto';

@Controller('/api/v1/technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) { }

  @Get()
  async index() {
    return await this.technologiesService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.technologiesService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.technologiesService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: TechnologiesDto,
  ) {
    return await this.technologiesService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.technologiesService.destroy(id);
  }

}
