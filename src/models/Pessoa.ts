import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Habilitacao from "./Habilitacao";

@Entity('tb_pessoa')
export default class Pessoa{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column('numeric')
    idade: number;
    
	@OneToOne(type => Habilitacao, pessoa=> Pessoa)
	habilitacao: Habilitacao
}