import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddUserToBst1628697413375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('bst', new TableColumn({
            name: 'user_id',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('bst', new TableForeignKey({
            name: 'UserToTest',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        })); 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('bst', 'UserToTest');
        
        await queryRunner.dropColumn('bst', 'user_id');
    }

}
