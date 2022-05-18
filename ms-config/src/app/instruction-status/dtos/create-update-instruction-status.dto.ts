import { IsNotEmpty, IsString } from "class-validator";

export class InstructionStatusDto {

    @IsString()
    @IsNotEmpty()
    name: string;
}   