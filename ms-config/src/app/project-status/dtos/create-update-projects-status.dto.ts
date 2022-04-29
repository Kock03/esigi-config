import { IsNotEmpty, IsString } from "class-validator";

export class ProjectStatusDto {

    @IsString()
    @IsNotEmpty()
    name: string;
}