import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class SeniorityEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}