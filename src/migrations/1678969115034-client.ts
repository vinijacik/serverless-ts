import { MigrationInterface, QueryRunner } from "typeorm";

export class client1678969115034 implements MigrationInterface {
    name = 'client1678969115034'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "email" character varying(255), "birthDate" character varying(255), "cpf" character varying(11), "cep" character varying(8), "address" character varying(255), "addressNumber" integer NOT NULL, "district" character varying(255), "city" character varying(255), "state" character varying(255), "country" character varying(255), "addressComplement" character varying(255), "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_9921dca81551c93e5a459ef03ce" UNIQUE ("cpf"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
