import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class GenderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}