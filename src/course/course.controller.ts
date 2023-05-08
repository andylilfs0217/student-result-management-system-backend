import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCourseDto } from './course.dto';
import { Course } from './course.entity';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly studentService: CourseService) {}

  @Get()
  async getCourses(): Promise<Course[]> {
    return await this.studentService.getCourses();
  }

  @Post()
  async createCourse(
    @Body() createCourseDto: CreateCourseDto,
  ): Promise<Course> {
    const { courseName } = createCourseDto;

    // Validate the request body
    if (!courseName) {
      throw new HttpException(
        'All fields are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const student = await this.studentService.createCourse(courseName);

    return student;
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: number): Promise<void> {
    await this.studentService.deleteCourse(id);
  }
}
