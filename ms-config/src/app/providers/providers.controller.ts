
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";

import { PaperDto } from '../paper/dtos/create-update-paper.dto';
import { ProvidersDto } from "./dtos/create-update-providers.dto";
import { ProvidersService } from "./providers.service";


@Controller('/api/v1/providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) { }

  @Get()
  async index() {
    return await this.providersService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.providersService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.providersService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: ProvidersDto,
  ) {
    return await this.providersService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.providersService.destroy(id);
  }

}
