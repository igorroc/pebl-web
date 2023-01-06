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

@Entity('bst')
class Bst {
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
    type: string;

    @Column()
    block: number;

    @Column("int", { array: true })
    congruency: number[];

    @Column("int", { array: true })
    trial: number[];

    @Column("int", { array: true })
    stim: number[];

    @Column("text", { array: true })
    resp: string[];

    @Column("int", { array: true })
    corr: number[];

    @Column("int", { array: true })
    rt: number[];

    @Column("int", { array: true })
    tooslow: number[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Bst;