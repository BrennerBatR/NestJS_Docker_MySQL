import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketController } from './socket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Socket } from './entity/socket.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Socket])],
  providers: [SocketService],
  controllers: [SocketController]
})
export class SocketModule {}
