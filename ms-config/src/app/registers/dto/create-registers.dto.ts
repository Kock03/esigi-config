import { IsNotEmpty } from "class-validator";

export class CreateRegistersDto {

    @IsNotEmpty()
    key: string;

    @IsNotEmpty()
    value: string;
}