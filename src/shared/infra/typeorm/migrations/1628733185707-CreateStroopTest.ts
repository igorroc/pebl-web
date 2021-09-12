import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStroopTest1628733185707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "stroop",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'deadline',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: 'subnum',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'round',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'block',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'trial',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'word',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'part',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'xpos',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'ypos',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'resp',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'rname',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'correct',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'intrusion',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'numresponses',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'time0',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'timea',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'timeend',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'trialtime',
                        type: 'varchar',
                        isArray: true
                    },
                    {
                        name: 'responsetime',
                        type: 'varchar',
                        isArray: true
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
        await queryRunner.dropTable('stroop')
    }

}
