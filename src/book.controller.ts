import { Controller, Get } from '@nestjs/common';
import type { BookService } from './book.service';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}
}
