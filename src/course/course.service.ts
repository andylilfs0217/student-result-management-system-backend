import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async createCourse(courseName: string) {
    // Create a new course object and save it to the database
    const course = new Course();
    course.courseName = courseName;
    return await this.courseRepository.save(course);
  }

  async getCourses(): Promise<Course[]> {
    const courses = await this.courseRepository.find();
    return courses;
  }

  async deleteCourse(id: number) {
    await this.courseRepository.delete(id);
  }

  async getCourse(courseId: number) {
    const course = await this.courseRepository.findOneBy({ id: courseId });
    return course;
  }
}
