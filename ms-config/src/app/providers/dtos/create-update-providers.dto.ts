import { IsNotEmpty, IsString } from "class-validator";

export class ProvidersDto {

    @IsString()
    @IsNotEmpty()
    name: string;

}   