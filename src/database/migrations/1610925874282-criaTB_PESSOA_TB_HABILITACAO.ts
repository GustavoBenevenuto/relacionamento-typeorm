import {MigrationInterface, QueryRunner} from "typeorm";

export class criaTBPESSOATBHABILITACAO1610925874282 implements MigrationInterface {
    name = 'criaTBPESSOATBHABILITACAO1610925874282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_pessoa" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "idade" numeric NOT NULL, CONSTRAINT "PK_a715292bf9a5c2eecf8ea6b0358" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_habilitacao" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "numero_habilitacao" character varying NOT NULL, "categoria" character varying NOT NULL, "id_pessoa" uuid NOT NULL, CONSTRAINT "REL_89a90c03b64720206a204d1fad" UNIQUE ("id_pessoa"), CONSTRAINT "PK_c93b374c219281e5d3ade79141c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_habilitacao" ADD CONSTRAINT "FK_89a90c03b64720206a204d1fad0" FOREIGN KEY ("id_pessoa") REFERENCES "tb_pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_habilitacao" DROP CONSTRAINT "FK_89a90c03b64720206a204d1fad0"`);
        await queryRunner.query(`DROP TABLE "tb_habilitacao"`);
        await queryRunner.query(`DROP TABLE "tb_pessoa"`);
    }

}
