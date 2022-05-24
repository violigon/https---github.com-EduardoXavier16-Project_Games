import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/createGame.Dto';
import { Game } from './entities/game.Entity.Dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll() {
    return this.gameService.findAll();
  }
  @Post()
  create(@Body() createGameDto: CreateGameDto): Game {
    return this.gameService.create(createGameDto);
  }
}
