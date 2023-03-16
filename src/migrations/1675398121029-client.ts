import { MigrationInterface, QueryRunner } from "typeorm";

export class client1675398121029 implements MigrationInterface {
    name = 'client1675398121029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL  NOT NULL, "fullName" character varying(255) NOT NULL, "email" character varying(255), "birthDate" character varying(255), "cpf" character varying(11), "cep" character varying(8), "address" character varying(255), "addressNumber" integer, "district" character varying(255), "city" character varying(255), "state" character varying(255), "country" character varying(255), "addressComplement" character varying(255), "createdAt" TIMESTAMP DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_2c56e61f9e1afb07f28882fcebb" UNIQUE ("email"), CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61" UNIQUE ("cpf"), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
