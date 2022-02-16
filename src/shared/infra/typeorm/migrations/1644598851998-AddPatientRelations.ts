import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPatientRelations1644598851998 implements MigrationInterface {
    name = 'AddPatientRelations1644598851998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD "patient_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD "patient_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD "patient_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD "patient_id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst"
            ADD CONSTRAINT "FK_bc04bf31311e53f3aad095b1ae4" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg"
            ADD CONSTRAINT "FK_30a13803e09bfc37ac41192b4c1" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop"
            ADD CONSTRAINT "FK_492109c2fcba40288bd41fcc981" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."tol"
            ADD CONSTRAINT "FK_9f1d39bd43243e1ce39e3167ce6" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "public"."tol" DROP COLUMN "patient_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."stroop" DROP COLUMN "patient_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."sternberg" DROP COLUMN "patient_id"
        `);
        await queryRunner.query(`
            ALTER TABLE "public"."bst" DROP COLUMN "patient_id"
        `);
    }

}
