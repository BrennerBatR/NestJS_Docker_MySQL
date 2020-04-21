import { Module, MiddlewareConsumer } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthMiddleware } from "./auth/middleware/auth.middleware";
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, SocketModule]
})
export class AppModule {
}

