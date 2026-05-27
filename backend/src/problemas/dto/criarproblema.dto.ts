import { IsNotEmpty, IsNumber, IsString, Min, Max, IsUUID} from 'class-validator';
import { Type } from 'class-transformer';

export class CriarProblemaDto {
    @IsNotEmpty()
    @IsString()
    problem_title!: string;

    @IsNotEmpty()
    @IsUUID()
    user_id!: string;

    @IsNotEmpty()
    @IsString()
    problem_gravity!: string;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    @Max(90)
    @Min(-90)
    problem_latitude!: number;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    @Max(180)
    @Min(-180)
    problem_longituded!: number;

    @IsNotEmpty()
    @IsUUID()
    categories_id!: string;
}