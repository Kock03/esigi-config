import { PrimaryGeneratedColumn, Column } from "typeorm";

export class RelationshipTypeEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}