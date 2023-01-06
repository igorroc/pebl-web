import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBstSternberg1646658324067 implements MigrationInterface {
    name = 'AddBstSternberg1646658324067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "result_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "result_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP CONSTRAINT "PK_a2a367357fb6aaef869b68f9024"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD CONSTRAINT "PK_a2a367357fb6aaef869b68f9024" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "subnum" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "type"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "type" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "block" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "congruency"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "congruency" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "trial" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "stim"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "stim" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "corr" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "rt" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "tooslow"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "tooslow" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP CONSTRAINT "PK_e207b67e1553198e0bad768d7c9"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD CONSTRAINT "PK_e207b67e1553198e0bad768d7c9" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "subnum" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "length"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "length" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "trial" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "set"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "set" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "corr" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "rt" integer array NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "rt" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "corr" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "set"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "set" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "length"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "length" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "subnum" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP CONSTRAINT "PK_e207b67e1553198e0bad768d7c9"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD CONSTRAINT "PK_e207b67e1553198e0bad768d7c9" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "tooslow"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "tooslow" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "rt" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "corr" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "stim"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "stim" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "congruency"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "congruency" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "block" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "type"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "type" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "subnum" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP CONSTRAINT "PK_a2a367357fb6aaef869b68f9024"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD CONSTRAINT "PK_a2a367357fb6aaef869b68f9024" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "result_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "result_id"
        `);
    }

}
