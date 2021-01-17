import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Pessoa from './Pessoa';

@Entity('tb_habilitacao')
export default class Habilitacao{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    numero_habilitacao: string;

    @Column()
    categoria: string;
		
	@OneToOne(type => Pessoa, habilitacao => Habilitacao)
	@JoinColumn({name: 'id_pessoa'})
    pessoa: Pessoa
    
    @Column({ nullable: false })
    id_pessoa: number;
}