import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { GenderDto } from "./dtos/create-update-gender.dto";
import { GenderService } from "./gender.service";

@Controller('/api/v1/gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) { }

  @Get()
  async index() {
    return await this.genderService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.genderService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: GenderDto) {
    return await this.genderService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: GenderDto,
  ) {
    return await this.genderService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.genderService.destroy(id);
  }

}
