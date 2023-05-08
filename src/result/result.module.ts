import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { Course } from 'src/course/course.entity';
import { Student } from 'src/student/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result, Course, Student])],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
