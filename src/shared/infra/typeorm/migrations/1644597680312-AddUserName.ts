import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserName1644597680312 implements MigrationInterface {
    name = 'AddUserName1644597680312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "name" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "name"
        `);
    }

}
