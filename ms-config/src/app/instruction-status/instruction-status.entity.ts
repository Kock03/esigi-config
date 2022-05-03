import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InstructionStatusEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}