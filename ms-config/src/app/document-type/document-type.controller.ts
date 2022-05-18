import { DocumentTypeService } from './document-type.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { DocumentTypeDto } from './dtos/create-update-document-type';


@Controller('/api/v1/document-type')
export class DocumentTypeController {
  constructor(private readonly documentTypeService: DocumentTypeService) { }

  @Get()
  async index() {
    return await this.documentTypeService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.documentTypeService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: DocumentTypeDto) {
    return await this.documentTypeService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: DocumentTypeDto,
  ) {
    return await this.documentTypeService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.documentTypeService.destroy(id);
  }

}
