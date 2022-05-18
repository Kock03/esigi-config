
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";

import { PaperDto } from '../paper/dtos/create-update-paper.dto';
import { SalaryChangeReasonDto } from "./dtos/create-update-salary-change-reason.dto";
import { SalaryChangeReasonService } from "./salary-change-reason.service";


@Controller('/api/v1/salary-change-reason')
export class SalaryChangeReasonController {
    constructor(private readonly salaryChangeReasonService: SalaryChangeReasonService) { }

    @Get()
    async index() {
        return await this.salaryChangeReasonService.findAll();
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.salaryChangeReasonService.findOneOrFail({ id });
    }

    @Post()
    async store(@Body() body: PaperDto) {
        return await this.salaryChangeReasonService.store(body);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() body: SalaryChangeReasonDto,
    ) {
        return await this.salaryChangeReasonService.update(id, body);
    }

    @Delete(':id')
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.salaryChangeReasonService.destroy(id);
    }

}
