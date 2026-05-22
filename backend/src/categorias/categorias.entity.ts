
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('categories')
export class Categorias {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
  created_at!: Date;

  @Column({name: 'categories_name', type: 'text'})
  categories_name!: string;

  @Column({name: 'categories_description', type: 'text'})
  categories_description!: string;
}
