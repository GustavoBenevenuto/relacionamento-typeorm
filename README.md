# Relacionamentos com Typeorm
Esse projeto tem como objetivo o estudo e o melhor entendimento de como funciona as relações no Typeorm.
######
**Observação:** Todas as classes Model são representações das entidades no banco.
> Em desenvolvimento

## OneToOne 
Relacionamento um para um (1:1)
###### 
Neste caso hipotético, UMA PESSOA pode ter somente UMA HABILITAÇÃO

### src/models/Pessoa.ts
```
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
```
Para um relacionamento 1:1, utilizamos no Model Pessoa o decorator **@OneToOne()**. Para fins de exemplificação utilizo a passagem de 2 argumentos.
1. O 1° argumento faz referência a classe da qual irá ocorrer a relação.
2. O 2° argumento faz referência de como a classe *Pessoa* está sendo representada na classe *Habilitacao*.


### src/models/Habilitacao.ts
```
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
```
Em *Habilitacao* é seguido o mesmo padrão que na classe *Pessoa*. Porém há o decorator **JoinColumn()** que serve para dizer em qual das entidades no banco irá ficar o id no qual liga as duas tabelas. 
