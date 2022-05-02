
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { EducationLevelDto } from "./dtos/create-update-education-level.dto";
import { EducationLevelService } from "./education-level.service";



@Controller('/api/v1/education-level')
export class EducationLevelController {
  constructor(private readonly educationLevelService: EducationLevelService) { }

  @Get()
  async index() {
    return await this.educationLevelService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.educationLevelService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: EducationLevelDto) {
    return await this.educationLevelService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: EducationLevelDto,
  ) {
    return await this.educationLevelService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.educationLevelService.destroy(id);
  }

}
