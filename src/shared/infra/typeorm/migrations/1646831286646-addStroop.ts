import {MigrationInterface, QueryRunner} from "typeorm";

export class addStroop1646831286646 implements MigrationInterface {
    name = 'addStroop1646831286646'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "result_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP CONSTRAINT "PK_38dddd8636ffbc55b57a7439880"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD CONSTRAINT "PK_38dddd8636ffbc55b57a7439880" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "subnum" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "round"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "round" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "block" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trial" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "part"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "part" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "xpos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "xpos" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "ypos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "ypos" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "resp" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "correct"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "correct" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "intrusion"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "intrusion" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "numresponses"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "numresponses" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "time0"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "time0" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timea"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timea" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timeend"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timeend" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trialtime" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "responsetime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "responsetime" integer array NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "responsetime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "responsetime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trialtime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timeend"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timeend" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timea"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timea" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "time0"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "time0" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "numresponses"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "numresponses" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "intrusion"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "intrusion" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "correct"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "correct" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "resp" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "ypos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "ypos" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "xpos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "xpos" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "part"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "part" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "block" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "round"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "round" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "subnum" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP CONSTRAINT "PK_38dddd8636ffbc55b57a7439880"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD CONSTRAINT "PK_38dddd8636ffbc55b57a7439880" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "result_id"
        `);
    }

}
