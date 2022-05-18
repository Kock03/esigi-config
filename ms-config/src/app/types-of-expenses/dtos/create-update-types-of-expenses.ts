import { IsNotEmpty, IsString } from "class-validator";

export class TypesOfExpensesDto{
    @IsString()
    @IsNotEmpty()
    name: string;
}