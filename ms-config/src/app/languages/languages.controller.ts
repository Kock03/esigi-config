import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { LanguagesDto } from './dtos/create-update-languages.dto';
import { LanguagesService } from './languages.service';


@Controller('/api/v1/languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) { }

  @Get()
  async index() {
    return await this.languagesService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.languagesService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: LanguagesDto) {
    return await this.languagesService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: LanguagesDto,
  ) {
    return await this.languagesService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.languagesService.destroy(id);
  }

}


