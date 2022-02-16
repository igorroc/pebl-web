import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePatient1644520626145 implements MigrationInterface {
    name = 'CreatePatient1644520626145'

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE "patients" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying NOT NULL,
                "name" character varying NOT NULL,
                "age" integer NOT NULL,
                "gender" character varying NOT NULL,
                "scholarity" character varying NOT NULL,
                "workField" character varying NOT NULL,
                "cpf" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_64e2031265399f5690b0beba6a5" UNIQUE ("email"),
                CONSTRAINT "UQ_5947301223f5a908fd5e372b0fb" UNIQUE ("cpf"),
                CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "patients"
        `);
    }

}
