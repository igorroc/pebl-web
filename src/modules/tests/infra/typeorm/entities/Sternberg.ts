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

@Entity('sternberg')
class Sternberg {
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
    subnum: string

    @Column()
    length: number;

    @Column("int", { array: true })
    trial: number[];

    @Column()
    set: string;

    @Column("text", { array: true })
    stim: string[];

    @Column("text", { array: true })
    targetfoil: string[];

    @Column("text", { array: true })
    resp: string[];

    @Column("int", { array: true })
    corr: number[];

    @Column("int", { array: true })
    rt: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Sternberg;