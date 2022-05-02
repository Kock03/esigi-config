import { PrimaryGeneratedColumn, Column } from "typeorm";

export class SeniorityEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}