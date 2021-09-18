import{ 
    Entity,
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn, 
    ManyToOne,
    JoinColumn
}from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/Users';

@Entity('bst')
class Bst{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column("text", { array: true })
    subnum: number[];

    @Column("int", { array: true })
    type: string[];

    @Column("text", { array: true })
    block: number[];

    @Column("text", { array: true })
    congruency: number[];

    @Column("text", { array: true })
    trial: number[];

    @Column("text", { array: true })
    stim: number[];

    @Column("text", { array: true })
    resp: string[];

    @Column("text", { array: true })
    corr: number[];

    @Column("text", { array: true })
    rt: string[];

    @Column("text", { array: true })
    tooslow: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Bst;