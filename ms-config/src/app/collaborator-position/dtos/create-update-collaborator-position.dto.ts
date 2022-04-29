import { IsNotEmpty, IsString } from "class-validator";

export class CollaboratorPositionDto {

    @IsString()
    @IsNotEmpty()
    name: string;
}  