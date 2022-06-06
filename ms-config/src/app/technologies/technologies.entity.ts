import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TechnologiesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}