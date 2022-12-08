import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  createOne(createUserDto: CreateUserDto): any {
    console.log(createUserDto);
    return {
      status: 'success',
      message: 'Registration successful',
    };
  }
}
