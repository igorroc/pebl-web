import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1618575236504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                 {
                   name: 'id',
                   type: 'uuid',
                   isPrimary: true,
                   generationStrategy: 'uuid',
                   default: 'uuid_generate_v4()',
                },
                {
                   name: 'age',
                   type: 'int',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'gender',
                    type: 'boolean'
                },
                {
                    name: 'scholarity',
                    type: 'varchar',
                },
                {
                    name: 'workField',
                    type: 'varchar',
                },
                {
                    name: 'headScholarity',
                    type: 'varchar',
                },
                {
                    name: 'headWorkField',
                    type: 'varchar',
                },
                {
                    name: 'maritalStatus',
                    type: 'boolean',
                },
                {
                    name: 'currentWork',
                    type: 'varchar',
                },
                {
                    name: 'glasses',
                    type: 'boolean',
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
