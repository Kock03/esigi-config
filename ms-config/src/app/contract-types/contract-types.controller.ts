import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { ContractTypesService } from "./contract-types.service";
import { ContractTypesDto } from "./dtos/create-update-contract-types.dto";

@Controller('/api/v1/contract-types')
export class ContractTypesController {
    constructor(private readonly contractTypesService: ContractTypesService) { }

    @Get()
    async index() {
        return await this.contractTypesService.findAll();
    }

    @Get(':id')
    async show(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.contractTypesService.findOneOrFail({ id });
    }

    @Post()
    async store(@Body() body: ContractTypesDto) {
        return await this.contractTypesService.store(body);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() body: ContractTypesDto,
    ) {
        return await this.contractTypesService.update(id, body);
    }

    @Delete(':id')
    async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.contractTypesService.destroy(id);
    }

}
