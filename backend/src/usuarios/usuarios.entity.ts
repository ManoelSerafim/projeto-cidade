
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { ManyToOne, JoinColumn } from 'typeorm';
import { Categorias } from '../categorias/categorias.entity';

@Entity('users')
export class Usuarios {
   @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: 'user_id',
    type: 'uuid',
    unique: true,
  })
  user_id!: string;

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
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at!: Date;
}
