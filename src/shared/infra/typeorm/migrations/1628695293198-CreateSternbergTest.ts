import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSternbergTest1628695293198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'sternberg',
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
                    name: 'length',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'trial',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'set',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'stim',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'targetfoil',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'resp',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'corr',
                    type: 'varchar',
                    isArray: true
                },
                {
                    name: 'rt',
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
        }));
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sternberg');
    }

}
