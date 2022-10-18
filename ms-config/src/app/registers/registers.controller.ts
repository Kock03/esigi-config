import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CollaboratorRegistersService } from "./collaborator-registers/collaborator-registers.service";
import { CustomerRegistersService } from "./customer-registers/customer-registers.service";

import { CreateRegistersDto } from "./dto/create-registers.dto";
import { UpdateRegistersDto } from "./dto/update-registers.dto";
import { FinanceRegistersService } from "./fincance-registers/finance-registers.service";
import { GenericRegistersService } from "./generic-registers/generic-registers.service";
import { IRegisters } from "./interface";
import { ProjectRegistersService } from "./project-registers/project-registers.service";

@Controller('/api/v1/registers')
export class RegistersController {
  constructor(private readonly projectRegistersService: ProjectRegistersService,
    private readonly genericRegistersService: GenericRegistersService,
    private readonly financeRegistersService: FinanceRegistersService,
    private readonly collaboratorRegistersService: CollaboratorRegistersService,
    private readonly customerRegistersService: CustomerRegistersService,
  ) { }

  @Post(':context')
  async store(@Param('context') context: string, @Body() body: CreateRegistersDto) {
    switch (context) {
      case 'customer':
        return await this.customerRegistersService.store(body);
      case 'collaborator':
        return await this.collaboratorRegistersService.store(body);
      case 'finance':
        return await this.financeRegistersService.store(body);
      case 'generic':
        return await this.genericRegistersService.store(body);
      case 'project':
        return await this.projectRegistersService.store(body);
      default:
        break;
    }
  }

  @Put(':context/update/:id')
  async update(
    @Param('context') context: string,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateRegistersDto
  ) {
    switch (context) {
      case 'customer':
        return await this.customerRegistersService.update(id, body);
      case 'collaborator':
        return await this.collaboratorRegistersService.update(id, body);
      case 'finance':
        return await this.financeRegistersService.update(id, body);
      case 'generic':
        return await this.genericRegistersService.update(id, body);
      case 'project':
        return await this.projectRegistersService.update(id, body);
      default:
        break;
    }
  }
  @Get(':context/find/:key')
  async index(@Param('context') context: string, @Param('key') key: string,) {
    switch (context) {
      case 'customer':
        return await this.customerRegistersService.findAll(key);
      case 'collaborator':
        return await this.collaboratorRegistersService.findAll(key);
      case 'finance':
        return await this.financeRegistersService.findAll(key);
      case 'generic':
        return await this.genericRegistersService.findAll(key);
      case 'project':
        return await this.projectRegistersService.findAll(key);
      default:
        break;
    }
  }

  @Get(':context/show/:id')
  async show(@Param('context') context: string, @Param('id', new ParseUUIDPipe()) id: string) {
    switch (context) {
      case 'customer':
        return await this.customerRegistersService.findOneOrFail({ id });
      case 'collaborator':
        return await this.collaboratorRegistersService.findOneOrFail({ id });
      case 'finance':
        return await this.financeRegistersService.findOneOrFail({ id });
      case 'generic':
        return await this.genericRegistersService.findOneOrFail({ id });
      case 'project':
        return await this.projectRegistersService.findOneOrFail({ id });
      default:
        break;
    }
  }

  @Delete(':context/delete/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('context') context: string, @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    switch (context) {
      case 'customer':
        return await this.customerRegistersService.destroy(id);
      case 'collaborator':
        return await this.collaboratorRegistersService.destroy(id);
      case 'finance':
        return await this.financeRegistersService.destroy(id);
      case 'generic':
        return await this.genericRegistersService.destroy(id);
      case 'project':
        return await this.projectRegistersService.destroy(id);
      default:
        break;
    }
  }

  @Post('list/:context/key')
  async findCollaboratorById(@Param('context') context: string, @Body() body: any) {
    console.log(body, context);
    switch (context) {
      case 'customer':
        return await this.customerRegistersService.findKeys(body.key);
      case 'collaborator':
        return await this.collaboratorRegistersService.findKeys(body.key);
      case 'finance':
        return await this.financeRegistersService.findKeys(body.key);
      case 'generic':
        return await this.genericRegistersService.findKeys(body.key);
      case 'project':
        return await this.projectRegistersService.findKeys(body.key);
      default:
        break;
    }
  }


}