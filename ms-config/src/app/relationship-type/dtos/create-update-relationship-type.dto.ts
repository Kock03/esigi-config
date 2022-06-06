import { IsNotEmpty, IsString } from "class-validator";

export class RelationshipTypeDto {

    @IsString()
    @IsNotEmpty()
    name: string;

}   