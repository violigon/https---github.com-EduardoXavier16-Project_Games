import { PartialType } from "@nestjs/swagger";
import { CreateGameDto } from "./createGame.Dto";

export class UpdateGameDto extends PartialType(CreateGameDto) {
  
}
