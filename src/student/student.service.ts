import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    emailAddress: string,
  ) {
    // Create a new student object and save it to the database
    const student = new Student();
    student.firstName = firstName;
    student.familyName = lastName;
    student.dateOfBirth = dateOfBirth;
    student.emailAddress = emailAddress;
    return await this.studentRepository.save(student);
  }

  async getStudents(): Promise<Student[]> {
    const students = await this.studentRepository.find();
    return students;
  }

  async deleteStudent(id: number) {
    await this.studentRepository.delete(id);
  }

  async getStudent(studentId: number) {
    const student = await this.studentRepository.findOneBy({ id: studentId });
    return student;
  }
}
