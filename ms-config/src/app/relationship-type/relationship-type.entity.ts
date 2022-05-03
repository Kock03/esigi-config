import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class RelationshipTypeEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}