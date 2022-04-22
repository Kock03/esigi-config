import { IsNotEmpty, IsString } from "class-validator";

export class PaperDto {

    @IsString()
    @IsNotEmpty()
    paperName: string;
}