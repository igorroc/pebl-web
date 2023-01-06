import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinTable,
    ManyToMany
}
    from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    gender: string;

    @Column()
    scholarity: string; 

    @Column()
    workField: string;

    @Column()
    headWorkField: string;

    @Column()
    maritalStatus: string; 

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;