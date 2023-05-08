import { Result } from 'src/result/result.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  @OneToMany(() => Result, (result) => result.student)
  results: Result[];
}
