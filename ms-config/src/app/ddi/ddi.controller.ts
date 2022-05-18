
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { DDIService } from "./ddi.service";
import { DDIDto } from "./dtos/create-update-ddi.dto";



@Controller('/api/v1/ddi')
export class DDIController {
  constructor(private readonly ddiService: DDIService) { }

  @Get()
  async index() {
    return await this.ddiService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.ddiService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: DDIDto) {
    return await this.ddiService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: DDIDto,
  ) {
    return await this.ddiService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.ddiService.destroy(id);
  }

}
