import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTestsNotNullable1644868965545 implements MigrationInterface {
    name = 'AlterTestsNotNullable1644868965545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP CONSTRAINT "UserToTest"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP CONSTRAINT "UserToTest"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP CONSTRAINT "UserToTest"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP CONSTRAINT "UserToTest"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."user_tokens" DROP CONSTRAINT "TokenUser"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "maritalStatus"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "maritalStatus" integer NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ALTER COLUMN "avatar"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ALTER COLUMN "user_id"
            SET NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "subnum" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "type"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "type" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "block" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "congruency"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "congruency" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "stim"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "stim" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "resp" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "corr" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "rt" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "tooslow"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "tooslow" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "subnum" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "length"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "length" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "set"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "set" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "stim"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "stim" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "targetfoil"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "targetfoil" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "resp" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "corr" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "rt" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "subnum" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "round"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "round" integer array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "block" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "word"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "word" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "color"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "color" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "part"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "part" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "xpos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "xpos" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "ypos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "ypos" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "resp" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "rname"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "rname" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "correct"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "correct" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "intrusion"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "intrusion" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "numresponses"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "numresponses" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "time0"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "time0" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timea"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timea" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timeend"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timeend" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trialtime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "responsetime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "responsetime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "sub"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "sub" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trial" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "size"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "size" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "current"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "current" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "end"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "end" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "step"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "step" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "reset"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "reset" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "tries"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "tries" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "score"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "score" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "abstime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "abstime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trialtime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "clicktime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "clicktime" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "done"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "done" text array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."user_tokens" DROP COLUMN "user_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."user_tokens"
            ADD "user_id" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD CONSTRAINT "FK_ea7c32bb985c40e3be8d1b0d88a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD CONSTRAINT "FK_99e81d6189910e22e9ab364b105" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD CONSTRAINT "FK_fe5d139889ada1c3162ec3f7327" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD CONSTRAINT "FK_06e73e3a23bb7a4271b4e07f5cc" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP CONSTRAINT "FK_06e73e3a23bb7a4271b4e07f5cc"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP CONSTRAINT "FK_fe5d139889ada1c3162ec3f7327"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP CONSTRAINT "FK_99e81d6189910e22e9ab364b105"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP CONSTRAINT "FK_ea7c32bb985c40e3be8d1b0d88a"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."user_tokens" DROP COLUMN "user_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."user_tokens"
            ADD "user_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "done"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "done" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "clicktime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "clicktime" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trialtime" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "abstime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "abstime" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "score"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "score" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "tries"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "tries" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "reset"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "reset" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "step"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "step" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "end"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "end" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "current"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "current" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "size"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "size" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "trial" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "sub"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "sub" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "responsetime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "responsetime" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trialtime"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trialtime" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timeend"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timeend" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "timea"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "timea" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "time0"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "time0" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "numresponses"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "numresponses" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "intrusion"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "intrusion" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "correct"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "correct" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "rname"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "rname" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "resp" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "ypos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "ypos" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "xpos"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "xpos" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "part"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "part" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "color"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "color" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "word"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "word" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "trial" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "block" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "round"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "round" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "subnum" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "rt" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "corr" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "resp" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "targetfoil"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "targetfoil" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "stim"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "stim" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "set"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "set" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "trial" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "length"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "length" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "subnum" character varying array NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "tooslow"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "tooslow" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "rt"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "rt" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "corr"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "corr" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "resp"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "resp" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "stim"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "stim" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "trial"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "trial" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "congruency"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "congruency" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "block"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "block" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "type"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "type" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "subnum"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "subnum" character varying array
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ALTER COLUMN "user_id" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ALTER COLUMN "avatar" DROP NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users" DROP COLUMN "maritalStatus"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD "maritalStatus" boolean NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."users"
            ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."user_tokens"
            ADD CONSTRAINT "TokenUser" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD CONSTRAINT "UserToTest" FOREIGN KEY ("user_id", "user_id", "user_id", "user_id") REFERENCES "users"("id", "id", "id", "id") ON DELETE
            SET NULL ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD CONSTRAINT "UserToTest" FOREIGN KEY ("user_id", "user_id", "user_id", "user_id") REFERENCES "users"("id", "id", "id", "id") ON DELETE
            SET NULL ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD CONSTRAINT "UserToTest" FOREIGN KEY ("user_id", "user_id", "user_id", "user_id") REFERENCES "users"("id", "id", "id", "id") ON DELETE
            SET NULL ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD CONSTRAINT "UserToTest" FOREIGN KEY ("user_id", "user_id", "user_id", "user_id") REFERENCES "users"("id", "id", "id", "id") ON DELETE
            SET NULL ON UPDATE CASCADE
        `);
    }

}
