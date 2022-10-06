import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateRegistersDto {

    @IsOptional()
    key: string;

    @IsOptional()
    value: string;
}