import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './result.entity';
import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private resultRepository: Repository<Result>,
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) {}

  async createResult(courseId: number, studentId: number, score: string) {
    // Create a new result object and save it to the database
    const result = new Result();
    result.course = await this.coursesRepository.findOneBy({ id: courseId });
    result.student = await this.studentsRepository.findOneBy({ id: studentId });
    result.score = score;
    const res = await this.resultRepository.save(result);
    return res;
  }

  async getResults(): Promise<Result[]> {
    const results = await this.resultRepository.find({
      relations: ['course', 'student'],
    });
    return results;
  }
}
