import { Injectable } from '@nestjs/common';
import { User } from './types/user.type';

@Injectable()
export class UsersService {

    private readonly users = [
    {
      userId: 1,
      email: 'test@example.com',
      password: 'test@example.com',
    },
    {
      userId: 2,
      email: 'admin@example.com',
      password: 'admin@example.com',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
  

}
