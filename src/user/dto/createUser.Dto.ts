import { IsPositive } from 'class-validator';

export class CreateUserDto {
  nome: string;
  @IsPositive()
  senha: number;
  nockname: string;
  email: string;
  pais: string;
}
