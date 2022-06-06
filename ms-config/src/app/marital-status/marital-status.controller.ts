import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { MaritalStatusDto } from './dtos/create-update-marital-status.dto';
import { MaritalStatusService } from './marital-status.service';


@Controller('/api/v1/marital-status')
export class MaritalStatusController {
  constructor(private readonly maritalstatusService: MaritalStatusService) { }

  @Get()
  async index() {
    return await this.maritalstatusService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.maritalstatusService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: MaritalStatusDto) {
    return await this.maritalstatusService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: MaritalStatusDto,
  ) {
    return await this.maritalstatusService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.maritalstatusService.destroy(id);
  }

}


