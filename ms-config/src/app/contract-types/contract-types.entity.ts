import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ContractTypesEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}