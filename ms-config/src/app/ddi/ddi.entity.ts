import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DDIEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}