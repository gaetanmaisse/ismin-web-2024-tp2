import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ISBN } from './ISBN';

export class BookDto {
  @IsString()
  @IsNotEmpty()
  isbn!: ISBN;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;

  @IsString()
  @IsDateString()
  date!: string;
}
