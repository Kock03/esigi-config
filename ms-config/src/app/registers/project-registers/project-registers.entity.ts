import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProjectRegistersEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    key: string;

    @Column()
    value: string;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}