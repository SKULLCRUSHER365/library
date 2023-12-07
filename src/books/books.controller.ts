import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('library')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('createBook')
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('getAllBooks')
  findAll() {
    return this.booksService.findAll();
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    console.log(id);
    console.log(updateBookDto);
    return this.booksService.update(id, updateBookDto);
  }
}
