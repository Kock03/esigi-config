import { IsNotEmpty, IsString } from "class-validator";

export class ContractTypesDto {

    @IsString()
    @IsNotEmpty()
    name: string;

}