import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Course, (course) => course.results, { onDelete: 'CASCADE' })
  course: Course;

  @ManyToOne(() => Student, (student) => student.results, {
    onDelete: 'CASCADE',
  })
  student: Student;

  @Column()
  score: string;
}
