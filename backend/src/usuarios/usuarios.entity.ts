
import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { ManyToOne, JoinColumn } from 'typeorm';
import { Categorias } from '../categorias/categorias.entity';

@Entity('users')
export class Usuarios {

  @PrimaryColumn({
    type: 'uuid',
  })
  id!: string;

  @Column({
    name: 'user_name',
    type: 'text',
  })
  user_name!: string;

  @Column({
    name: 'user_email',
    type: 'text',
    unique: true,
  })
  user_email!: string;

  @Column({
    name: 'user_role',
    type: 'text',
    default: 'user',
  })
  user_role!: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
  })
  created_at!: Date;
}

