import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PaperEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    paperName: string;
}