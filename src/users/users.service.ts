import { HttpException, Injectable } from '@nestjs/common';
import { UserLoginDto } from './userLogin.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  { id: 1, username: '1', password: '1' },
  { id: 2, username: '2', password: '2' },
  { id: 3, username: '3', password: '3' },
];

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}

  createToken({ username, password }: UserLoginDto) {
    const user = fakeUsers.find((user) => user.username === username);
    if (!user) throw new HttpException('User not found', 404);
    if (password === user.password) {
      const { password, ...data } = user;
      return this.jwtService.sign(data);
    }
  }
}
