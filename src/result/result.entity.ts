import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Course, (course) => course.results)
  course: Course;

  @ManyToOne(() => Student, (student) => student.results)
  student: Student;

  @Column()
  score: string;
}
