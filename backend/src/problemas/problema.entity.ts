
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ManyToOne, JoinColumn } from 'typeorm';
import { Categorias } from '../categorias/categorias.entity';
import { Usuarios } from '../usuarios/usuarios.entity';

@Entity('problems')
export class Problemas {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp'})
  created_at!: Date;

  @Column({name: 'problem_title', type: 'text'})
  problem_title!: string;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'user_id' })
  user!: Usuarios;

  @Column({name: 'problem_gravity', type: 'text'})
  problem_gravity!: string;

  @Column({name: 'problem_latitude', type: 'float8'})
  problem_latitude!: number;

  @Column({name: 'problem_longituded', type: 'float8'})
  problem_longituded!: number;

  @ManyToOne(() => Categorias)
  @JoinColumn({ name: 'categories_id' })
  category!: Categorias;
}
