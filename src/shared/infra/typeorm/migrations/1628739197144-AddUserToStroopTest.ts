import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddUserToStroopTest1628739197144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('stroop', new TableColumn({
            name: 'user_id',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('stroop', new TableForeignKey({
            name: 'UserToTest',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        })); 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('stroop', 'UserToTest');
        
        await queryRunner.dropColumn('stroop', 'user_id');
    }

}