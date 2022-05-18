import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EducationLevelEntity{

    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
}