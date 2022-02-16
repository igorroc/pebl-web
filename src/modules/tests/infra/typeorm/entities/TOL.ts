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
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @Column("text", { array: true })
    sub: number[];

    @Column("text", { array: true })
    trial: number[];

    @Column("text", { array: true })
    size: number[];

    @Column("text", { array: true })
    current: number[];

    @Column("text", { array: true })
    end: number[];

    @Column("text", { array: true })
    step: number[]

    @Column("text", { array: true })
    reset: number[];

    @Column("text", { array: true })
    tries: number[];

    @Column("text", { array: true })
    score: number[];

    @Column("text", { array: true })
    abstime: number[];

    @Column("text", { array: true })
    trialtime: number[];

    @Column("text", { array: true })
    clicktime: number[];

    @Column("text", { array: true })
    done: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tol;