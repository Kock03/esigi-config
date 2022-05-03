import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class LanguagesEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
}