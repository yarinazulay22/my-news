import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('news') 
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar' , length:50})
    title: string;

    @Column({type: 'varchar' , length:50})
    author: string;

    @Column({type: 'varchar' , length:1000})
    body: string;

    @Column({type: 'varchar' , length:400})
    image: string;

    @CreateDateColumn() 
    time: Date;
}