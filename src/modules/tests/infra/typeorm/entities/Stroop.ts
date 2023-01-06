import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/Users';
import Patient from '@modules/patients/infra/typeorm/entities/Patients';

@Entity('stroop')
class Stroop {
    @PrimaryGeneratedColumn()
    id: string;

    @Column("uuid")
    result_id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    patient_id: string;

    @ManyToOne(() => Patient)
    @JoinColumn({ name: 'patient_id' })
    patient: Patient;

    @Column()
    subnum: string;

    @Column()
    round: number;

    @Column()
    block: number;

    @Column("int", { array: true })
    trial: number[];

    @Column("text", { array: true })
    word: string[];

    @Column("text", { array: true })
    color: string[];

    @Column()
    part: string;

    @Column("float", { array: true })
    xpos: number[];

    @Column("float", { array: true })
    ypos: number[];

    @Column("int", { array: true })
    resp: number[];

    @Column("text", { array: true })
    rname: string[];

    @Column("int", { array: true })
    correct: number[];

    @Column("int", { array: true })
    intrusion: number[];

    @Column("int", { array: true })
    numresponses: number[];

    @Column("int", { array: true })
    time0: number[];

    @Column("int", { array: true })
    timea: number[];

    @Column("int", { array: true })
    timeend: number[];

    @Column("int", { array: true })
    trialtime: number[];

    @Column("int", { array: true })
    responsetime: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Stroop;