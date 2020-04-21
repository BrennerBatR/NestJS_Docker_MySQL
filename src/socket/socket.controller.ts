import {
  Controller,
  Body,
  HttpException,
  HttpStatus,
  Post,
  HttpCode,
  Get,
} from "@nestjs/common";
import { SocketService } from "./socket.service";
import { Socket } from "./entity/socket.entity";
import {
  ApiResponse,
  ApiImplicitParam,
  ApiUseTags,
  ApiImplicitQuery,
} from "@nestjs/swagger";

@ApiUseTags("Socket")
@Controller("socket")
export class SocketController {
  constructor(private readonly socketService: SocketService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Socket criado com sucesso",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Dados inválidos",
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() socket: Socket) {
    try {
      return await this.socketService.create(socket);
    } catch (e) {
      throw new HttpException(
        "Internal Server Error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
