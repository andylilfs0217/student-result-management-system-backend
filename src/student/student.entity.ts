import { Result } from 'src/result/result.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  familyName: string;

  @Column()
  emailAddress: string;

  @Column()
  dateOfBirth: Date;

  @OneToMany(() => Result, (result) => result.student)
  results: Result[];
}
