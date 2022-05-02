import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DocumentTypeEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}