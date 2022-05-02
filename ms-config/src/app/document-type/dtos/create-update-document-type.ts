import { IsNotEmpty, IsString } from "class-validator";

export class DocumentTypeDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
}