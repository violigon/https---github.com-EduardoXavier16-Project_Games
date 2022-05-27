import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/createGame.Dto';
import { Game } from './entities/game.Entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateGameDto } from './dto/updateGameDto';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {};

  @Get()
  @ApiOperation({ summary: 'Listar todos os jogos' })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Encontrar um jogo pelo id' })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  };

  @Post()
  @ApiOperation({ summary: 'Criar um jogo' })
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.create(createGameDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma mesa pelo seu ID',});
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(id, dto);
  }
}
