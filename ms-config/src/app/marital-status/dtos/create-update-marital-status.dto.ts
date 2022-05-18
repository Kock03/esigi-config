import { IsNotEmpty, IsString } from "class-validator";

export class MaritalStatusDto {

    @IsString()
    @IsNotEmpty()
    name: string;
}   