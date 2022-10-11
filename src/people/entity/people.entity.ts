import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('people')
export class People{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;
     
    @Column({length: 255, unique: true})
    email: string;

    @Column()
    birthDate: Date;

}