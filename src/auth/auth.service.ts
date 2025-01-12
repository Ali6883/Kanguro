import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { ResponseCode, ResponseMessage } from 'src/constants/response.constants';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      id: 1,
      username: 'test',       
      password: 'password123', 
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<ApiResponse<{ accessToken: string }>> {
    const user = this.users.find((user) => user.username === loginDto.username);
    if (!user) {
      return {
        code: ResponseCode.UNAUTHORIZED,
        message: ResponseMessage.INVALIDLOGIN,
        data: null,
      };
    }

    if (user.password !== loginDto.password) {
      return {
        code: ResponseCode.UNAUTHORIZED,
        message: ResponseMessage.INVALIDLOGIN,
        data: null,
      };
    }

    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return {
      code: ResponseCode.SUCCESS,
      message: ResponseMessage.LOGINSUCCESSFULLY,
      data: { accessToken },
    };
  }
}
