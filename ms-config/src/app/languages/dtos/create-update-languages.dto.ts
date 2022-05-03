import { IsNotEmpty, IsString } from "class-validator";

export class LanguagesDto {

    @IsString()
    @IsNotEmpty()
    name: string;
}   