import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post('/create')
  createUser(): any {
    return {
      status: 'success',
      message: 'Registration was successful',
      user: {
        username: 'some username',
      },
    };
  }
}
