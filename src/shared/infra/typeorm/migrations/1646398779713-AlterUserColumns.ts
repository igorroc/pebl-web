import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUserColumns1646398779713 implements MigrationInterface {
    name = 'AlterUserColumns1646398779713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "avatar"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "glasses"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "currentWork"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "headScholarity"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "gender"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "gender" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "maritalStatus"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "maritalStatus" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "maritalStatus"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "maritalStatus" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "gender"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "gender" boolean NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "headScholarity" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "currentWork" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "glasses" boolean NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "avatar" character varying NOT NULL
        `);
    }

}
