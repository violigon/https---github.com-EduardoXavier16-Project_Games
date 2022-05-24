import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/createGame.Dto';
import { Game } from './entities/game.Entity.Dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {
  games: Game[] = [];
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return this.prisma.game.findMany();
  }
  create(createGameDto: CreateGameDto): Game {
    const game: Game = { id: 'id_aleatorio', ...createGameDto};
    this.games.push(game);
    return game;
  }
}
