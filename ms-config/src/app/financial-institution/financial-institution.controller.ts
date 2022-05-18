import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { FinancialInstitutionDto } from "./dtos/create-update-financial-institution.dto";
import { FinancialInstitutionService } from "./financial-institution.service";


@Controller('/api/v1/financial-institution')
export class FinancialInstitutionController {
  constructor(private readonly financialInstitutionService: FinancialInstitutionService) { }

  @Get()
  async index() {
    return await this.financialInstitutionService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.financialInstitutionService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: FinancialInstitutionDto) {
    return await this.financialInstitutionService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: FinancialInstitutionDto,
  ) {
    return await this.financialInstitutionService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.financialInstitutionService.destroy(id);
  }

}
