import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CollaboratorPositionEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}