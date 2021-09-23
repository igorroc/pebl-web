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

@Entity('stroop')
class Stroop{
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
    round: number[];

    @Column("text", { array: true })
    block: number[];

    @Column("text", { array: true })
    trial: number[];

    @Column("text", { array: true })
    word: number[];
    
    @Column("text", { array: true })
    color: string[];

    @Column("text", { array: true })
    part: string[];

    @Column("text", { array: true })
    xpos: number[];

    @Column("text", { array: true })
    ypos: number[];

    @Column("text", { array: true })
    resp: number[];

    @Column("text", { array: true })
    rname: string[];

    @Column("text", { array: true })
    correct: number[];

    @Column("text", { array: true })
    intrusion: number[];

    @Column("text", { array: true })
    numresponses: number[];

    @Column("text", { array: true })
    time0: number[];

    @Column("text", { array: true })
    timea: number[];

    @Column("text", { array: true })
    timeend: number[];

    @Column("text", { array: true })
    trialtime: number[];

    @Column("text", { array: true })
    responsetime: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Stroop;