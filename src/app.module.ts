import { Module, MiddlewareConsumer } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthMiddleware } from "./auth/middleware/auth.middleware";

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule]
})
export class AppModule {
   configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}

