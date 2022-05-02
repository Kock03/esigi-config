import { IsNotEmpty, IsString } from "class-validator";

export class SeniorityDto {

    @IsString()
    @IsNotEmpty()
    name: string;
    
}   