
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { PaperDto } from '../paper/dtos/create-update-paper.dto';
import { TypesOfExpensesDto } from "./dtos/create-update-types-of-expenses";
import { TypesOfExpensesService } from "./types-of-expenses.service";


@Controller('/api/v1/types-of-expenses')
export class TypesOfExpensesController {
  constructor(private readonly typesOfExpensesService: TypesOfExpensesService) { }

  @Get()
  async index() {
    return await this.typesOfExpensesService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.typesOfExpensesService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: PaperDto) {
    return await this.typesOfExpensesService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: TypesOfExpensesDto,
  ) {
    return await this.typesOfExpensesService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.typesOfExpensesService.destroy(id);
  }

}
