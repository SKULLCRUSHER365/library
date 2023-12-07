import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index(['title', 'author'], { unique: true })
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column()
  title: string;

  @Column()
  author: string;
}
