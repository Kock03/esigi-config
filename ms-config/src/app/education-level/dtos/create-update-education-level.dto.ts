import { IsNotEmpty, IsString } from "class-validator";

export class EducationLevelDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
}