import { 
    Entity ,
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn,
    JoinTable,
    ManyToMany
}
from 'typeorm';

@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column()
    gender: boolean;

    @Column()
    scholarity: string;

    @Column()
    workField: string;

    @Column()
    headScholarity: string;

    @Column()
    headWorkField: string;

    @Column()
    maritalStatus: number;

    @Column()
    currentWork: string;

    @Column()
    glasses: boolean;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;