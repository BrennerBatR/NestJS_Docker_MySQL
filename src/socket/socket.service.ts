import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Socket } from "./entity/socket.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SocketService {
  constructor(
    @InjectRepository(Socket)
    private readonly socketRepository: Repository<Socket>
  ) {}

  async create(socket: Socket): Promise<Socket[]> {
    return await this.socketRepository.find({
      where: { user: "123123" },
      join: {
        alias: "socket",
        leftJoinAndSelect: {
          user: "socket.user",
        },
      },
    });
  }
}
