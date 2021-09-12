import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddUserToTol1628743333915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tol', new TableColumn({
            name: 'user_id',
            type: 'uuid'
        }));

        await queryRunner.createForeignKey('tol', new TableForeignKey({
            name: 'UserToTest',
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        })); 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tol', 'UserToTest');
        
        await queryRunner.dropColumn('tol', 'user_id');
    }

}