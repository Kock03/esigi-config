import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MaritalStatusEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}