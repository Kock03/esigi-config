import { IsNotEmpty, IsString } from "class-validator";

export class GenderDto{

    @IsString()
    @IsNotEmpty()
    name: string;
    
}