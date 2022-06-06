import { InstructionStatusService } from './instruction-status.service';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { InstructionStatusDto } from './dtos/create-update-instruction-status.dto';



@Controller('/api/v1/instruction-status')
export class InstructionStatusController {
  constructor(private readonly instructionStatusService: InstructionStatusService) { }

  @Get()
  async index() {
    return await this.instructionStatusService.findAll();
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.instructionStatusService.findOneOrFail({ id });
  }

  @Post()
  async store(@Body() body: InstructionStatusDto) {
    return await this.instructionStatusService.store(body);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: InstructionStatusDto,
  ) {
    return await this.instructionStatusService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.instructionStatusService.destroy(id);
  }

}


