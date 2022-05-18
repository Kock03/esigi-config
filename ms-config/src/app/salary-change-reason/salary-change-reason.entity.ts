import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class SalaryChangeReasonEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}