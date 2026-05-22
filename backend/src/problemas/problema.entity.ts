
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('problemas')
export class Problema {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
  created_at!: Date;

  @Column({name: 'problem_title', type: 'text'})
  problem_title!: string;

  @Column({name: 'user_id', type: 'uuid'})
  user_id!: string;

  @Column({name: 'problem_gravity', type: 'text'})
  problem_gravity!: string;

  @Column({name: 'problem_latitude', type: 'float8'})
  problem_latitude!: number;

  @Column({name: 'problem_longitude', type: 'float8'})
  problem_longitude!: number;

  @Column({name: 'categories_id', type: 'uuid'})
  categories_id!: string;
}
