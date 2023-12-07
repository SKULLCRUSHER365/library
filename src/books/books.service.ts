import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async onModuleInit() {
    await this.seedDatabase(); // Call the seeding method when the module initializes
  }

  private async seedDatabase(): Promise<void> {
    const books = [
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: '1984', author: 'George Orwell' },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
      { title: 'Pride and Prejudice', author: 'Jane Austen' },
      { title: 'Animal Farm', author: 'George Orwell' },
      { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
      { title: 'Brave New World', author: 'Aldous Huxley' },
      {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
      },
      { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
      { title: 'The Chronicles of Narnia', author: 'C.S. Lewis' },
      { title: 'Moby-Dick', author: 'Herman Melville' },
      { title: 'Frankenstein', author: 'Mary Shelley' },
      { title: 'Jane Eyre', author: 'Charlotte Bronte' },
      { title: 'War and Peace', author: 'Leo Tolstoy' },
      { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde' },
      { title: 'Wuthering Heights', author: 'Emily Bronte' },
      { title: 'The Odyssey', author: 'Homer' },
      { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
      { title: 'Don Quixote', author: 'Miguel de Cervantes' },
    ];

    const existingBooks = await this.bookRepository.find();

    if (existingBooks.length === 0) {
      await this.bookRepository.save(
        books.map((book) => this.bookRepository.create(book)),
      );
      console.log('Database seeded successfully with books.');
    }
  }

  async create(createBookDto: CreateBookDto) {
    try {
      const newBook = this.bookRepository.create(createBookDto);
      return await this.bookRepository.save(newBook);
    } catch (error) {
      throw new InternalServerErrorException(error.messege);
    }
  }

  async findAll() {
    try {
      return await this.bookRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error.messege);
    }
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    try {
      //const updateData: Partial<Book> = { ...updateBookDto };
      await this.bookRepository.update(id, updateBookDto);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.messege);
    }
  }
}
