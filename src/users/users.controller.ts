import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserLoginDto } from './userLogin.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('/login')
    @UsePipes(new ValidationPipe())
    login(@Body() data: UserLoginDto) {
        return this.userService.createUser(data)
    }
}
