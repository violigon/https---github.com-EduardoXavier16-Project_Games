import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'O nome usuário do usuário!',
    example: 'Eduardo Xavier'
  })
  nome: string;

  @IsPositive()
  @IsNumber()
  @MinLength(7)
  @ApiProperty({
    description: 'Senha de acesso a plataforma!',
    example: 7777777
  })
  senha: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Um nome ou apelido diferente do seu verdadeiro nome!',
    example: 'Edu'
  })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Seu email!',
    example: 'edwardo.xavier@gmail.com'
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Seu país de nascimento!',
    example: 'Portugal'
  })
  pais: string;
}
