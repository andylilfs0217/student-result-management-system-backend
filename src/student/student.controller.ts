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
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { CreateStudentDto } from './student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents(): Promise<Student[]> {
    return await this.studentService.getStudents();
  }

  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    const { firstName, familyName, dateOfBirth, emailAddress } =
      createStudentDto;

    // Validate the request body
    if (!firstName || !familyName || !dateOfBirth || !emailAddress) {
      throw new HttpException(
        'All fields are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const student = await this.studentService.createStudent(
      firstName,
      familyName,
      dateOfBirth,
      emailAddress,
    );

    return student;
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: number): Promise<void> {
    await this.studentService.deleteStudent(id);
  }
}
