import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.Dto';
import { User } from './entities/user.Entity.Dto';

@Injectable()
export class UserService {
  users: User[] = [];
  findAll(): User[] {
    return this.users;
  }
  create(createUserDto: CreateUserDto): User {
    const user: User = { id: 'id_aleatorio', ...createUserDto};
    this.users.push(user);
    return user;
  }
}
