import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PaperDto } from './dtos/create-update-paper.dto';
import { PaperService } from './paper.service';

@Controller('/api/v1/paper')
export class PaperController {
  constructor(private readonly paperService: PaperService) { }

  @Get()
  async index() {
    return await this.paperService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.paperService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.paperService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: PaperDto,
  ) {
    return await this.paperService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.paperService.destroy(id);
  }

}


