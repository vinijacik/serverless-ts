import { MigrationInterface, QueryRunner } from "typeorm";

export class client1675398121029 implements MigrationInterface {
    name = 'client1675398121029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "birthDate" character varying(255) NOT NULL, "cpf" character varying(11) NOT NULL, "cep" character varying(8) NOT NULL, "address" character varying(255) NOT NULL, "addressNumber" integer NOT NULL, "district" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "state" character varying(255) NOT NULL, "country" character varying(255) NOT NULL, "addressComplement" character varying(255), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_2c56e61f9e1afb07f28882fcebb" UNIQUE ("email"), CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61" UNIQUE ("cpf"), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
