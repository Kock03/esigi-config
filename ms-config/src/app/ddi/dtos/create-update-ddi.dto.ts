import { IsNotEmpty, IsString } from "class-validator";

export class DDIDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
}