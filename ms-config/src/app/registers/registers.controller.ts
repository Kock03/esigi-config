import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { CollaboratorRegistersService } from "./collaborator-registers/collaborator-registers.service";
import { CustomerRegistersService } from "./customer-registers/customer-registers.service";

import { CreateRegistersDto } from "./dto/create-registers.dto";
import { UpdateRegistersDto } from "./dto/update-registers.dto";
import { FinanceRegistersService } from "./fincance-registers/finance-registers.service";
import { GenericRegistersService } from "./generic-registers/generic-registers.service";
import { ProjectRegistersService } from "./project-registers/project-registers.service";

@Controller('/api/v1/regiters')
export class RegistersController {
  constructor(private readonly projectRegistersService: ProjectRegistersService,
    private readonly genericRegistersService: GenericRegistersService,
    private readonly financeRegistersService: FinanceRegistersService,
    private readonly collaboratorRegistersService: CollaboratorRegistersService,
    private readonly customerRegistersService: CustomerRegistersService,
  ) { }

  @Post(':context')
  async store(@Param('context') context: string, @Body() body: CreateRegistersDto) {
    console.log(context)
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

  @Put(':id/update/:context')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Param('context') context: string,
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

  @Post('find/key')
  async index(@Body() body: any) {
    console.log(body)
    switch (body.context) {
      case 'customer':
        return await this.customerRegistersService.findAll(body.key);
      case 'collaborator':
        return await this.collaboratorRegistersService.findAll(body.key);
      case 'finance':
        return await this.financeRegistersService.findAll(body.key);
      case 'generic':
        return await this.genericRegistersService.findAll(body.key);
      case 'project':
        return await this.projectRegistersService.findAll(body.key);
      default:
        break;
    }
  }

  @Get(':id/show/:context')
  async show(@Param('id', new ParseUUIDPipe()) id: string,
    @Param('context') context: string) {
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

  @Delete(':id/delete/:context')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string,
    @Param('context') context: string) {
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
}