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

@Entity('sternberg')
class Sternberg{
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
    length: number[];

    @Column("text", { array: true })
    trial: number[];

    @Column("text", { array: true })
    set: string[];

    @Column("text", { array: true })
    stim: string[];

    @Column("text", { array: true })
    targetfoil: string[];

    @Column("text", { array: true })
    resp: string[];

    @Column("text", { array: true })
    corr: number[];

    @Column("text", { array: true })
    rt: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Sternberg;