import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProblemasService } from './problemas.service';
import { Problema } from './problema.entity';

@Controller('problemas')
export class ProblemasController {
    constructor(private readonly problemasService: ProblemasService) {}

    @Get()
    async listarProblemas(): Promise<Problema[]> {
        return this.problemasService.findAll();
    }
}

