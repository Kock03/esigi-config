import { PrimaryGeneratedColumn, Column } from "typeorm";

export class SalaryChangeReasonEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}