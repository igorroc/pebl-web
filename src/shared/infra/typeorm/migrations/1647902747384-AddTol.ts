import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTol1647902747384 implements MigrationInterface {
    name = 'AddTol1647902747384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "result_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP CONSTRAINT "PK_e770a9207021a92d0b68bf6433f"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD CONSTRAINT "PK_e770a9207021a92d0b68bf6433f" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "sub"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "sub" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trial" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "size"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "size" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "step"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "step" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "reset"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "reset" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "tries"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "tries" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "score"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "score" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "abstime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "abstime" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trialtime" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "clicktime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "clicktime" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "done"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "done" integer array NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "done"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "done" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "clicktime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "clicktime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trialtime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "abstime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "abstime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "score"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "score" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "tries"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "tries" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "reset"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "reset" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "step"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "step" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "size"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "size" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "sub"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "sub" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP CONSTRAINT "PK_e770a9207021a92d0b68bf6433f"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD CONSTRAINT "PK_e770a9207021a92d0b68bf6433f" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "result_id"
        `);
    }

}
