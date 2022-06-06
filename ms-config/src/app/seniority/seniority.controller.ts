
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { PaperDto } from '../paper/dtos/create-update-paper.dto';
import { SeniorityDto } from "./dtos/create-update-seniority";
import { SeniorityService } from "./seniority.service";

@Controller('/api/v1/seniority')
export class SeniorityController {
  constructor(private readonly seniorityService: SeniorityService) { }

  @Get()
  async index() {
    return await this.seniorityService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.seniorityService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.seniorityService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: SeniorityDto,
  ) {
    return await this.seniorityService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.seniorityService.destroy(id);
  }

}
