import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypesOfExpensesEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}