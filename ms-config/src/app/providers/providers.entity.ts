import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class ProvidersEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}