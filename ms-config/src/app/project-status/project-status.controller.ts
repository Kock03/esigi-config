import { ProjectStatusService } from './project-status.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { ProjectStatusDto } from './dtos/create-update-projects-status.dto';
import { PaperDto } from '../paper/dtos/create-update-paper.dto';

@Controller('/api/v1/project-status')
export class ProjectStatusController {
  constructor(private readonly projectStatusService: ProjectStatusService) { }

  @Get()
  async index() {
    return await this.projectStatusService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.projectStatusService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.projectStatusService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ProjectStatusDto,
  ) {
    return await this.projectStatusService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.projectStatusService.destroy(id);
  }

}
