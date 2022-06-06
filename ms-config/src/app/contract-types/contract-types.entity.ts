import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContractTypesEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}