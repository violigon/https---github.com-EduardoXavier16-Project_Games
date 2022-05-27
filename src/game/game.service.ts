import { Injectable, Param } from '@nestjs/common';
import { CreateGameDto } from './dto/createGame.Dto';
import { Game } from './entities/game.Entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/updateGameDto';
import { Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } });
  }

  create(createGameDto: CreateGameDto): Promise<Game> {
    const data: Game = { ...createGameDto };
    return this.prisma.game.create({
      data,
    });
  }
}

update(id: string, dto: UpdateGameDto): Promise<Game> {
  const data: Partial<Game> = { ...dto};
  return this.prisma.game.update({
    where: { id },
    data,
  })
}
