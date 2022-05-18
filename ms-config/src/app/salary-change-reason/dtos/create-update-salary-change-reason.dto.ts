import { IsNotEmpty, IsString } from "class-validator";

export class SalaryChangeReasonDto {

    @IsString()
    @IsNotEmpty()
    name: string;

}   