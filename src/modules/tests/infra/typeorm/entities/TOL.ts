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

@Entity('tol')
class Tol {
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
    sub: string;

    @Column("int", { array: true })
    trial: number[];

    @Column()
    size: number;

    @Column("text", { array: true })
    current: string[];

    @Column("text", { array: true })
    end: string[];

    @Column("int", { array: true })
    step: number[]

    @Column("int", { array: true })
    reset: number[];

    @Column("int", { array: true })
    tries: number[];

    @Column("int", { array: true })
    score: number[];

    @Column("int", { array: true })
    abstime: number[];

    @Column("int", { array: true })
    trialtime: number[];

    @Column("int", { array: true })
    clicktime: number[];

    @Column("int", { array: true })
    done: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tol;