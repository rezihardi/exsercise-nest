import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('WhiteListLimitName')
export class WhiteListLimitName {
    @Column()
    limitname: string;

    @Column()
    cpname: string;
}