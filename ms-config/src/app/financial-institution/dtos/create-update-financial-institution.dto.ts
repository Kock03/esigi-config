import { IsNotEmpty, IsString } from "class-validator";

export class FinancialInstitutionDto{

    @IsString()
    @IsNotEmpty()
    name: string;
    
}