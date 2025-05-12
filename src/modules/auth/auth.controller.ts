import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {

    }

    @Post('login')
    async login(
        @Body() loginDto: LoginDTO,
        @Res({ passthrough: true }) response: Response,
    ) {
        const user = await this.authService.validateUser(
            loginDto.email,
            loginDto.password,
        );
        return this.authService.login(user, response);
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) response: Response) {
        return this.authService.logout(response);
    }
}
