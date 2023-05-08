import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateResultDto } from './result.dto';
import { Result } from './result.entity';
import { ResultService } from './result.service';

@Controller('results')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get()
  async getResults(): Promise<Result[]> {
    return await this.resultService.getResults();
  }

  @Post()
  async createResult(
    @Body() createResultDto: CreateResultDto,
  ): Promise<Result> {
    const { courseId, studentId, score } = createResultDto;

    // Validate the request body
    if (!courseId || !studentId || !score) {
      throw new HttpException(
        'All fields are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const result = await this.resultService.createResult(
      courseId,
      studentId,
      score,
    );

    return result;
  }
}
