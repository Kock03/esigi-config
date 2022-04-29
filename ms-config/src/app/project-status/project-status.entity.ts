import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProjectStatusEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}