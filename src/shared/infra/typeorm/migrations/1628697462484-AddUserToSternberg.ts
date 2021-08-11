import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddUserToSternberg1628697462484 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('sternberg', new TableColumn({
            name: 'user_id',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('sternberg', new TableForeignKey({
            name: 'UserToTest',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        })); 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('sternberg', 'UserToTest');
        
        await queryRunner.dropColumn('sternberg', 'user_id');
    }

}

