import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTolTest1628733289602 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tol',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'sub',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'trial',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'size',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'current',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'end',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'step',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'reset',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'tries',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'score',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'abstime',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'trialtime',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'clicktime',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'done',
                        type: 'varchar',
                        isArray: true,
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
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tol')
    }

}

