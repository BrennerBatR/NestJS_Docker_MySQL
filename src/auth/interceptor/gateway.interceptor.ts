import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { WsException } from "@nestjs/websockets";

@Injectable()
export class GatewayInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
   // console.log("Interceptor Before...");
    const token = context.getArgs()[1]["token"];

    context.getArgs()[1]["user"] = "User";
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(/* () => console.log(`After... ${Date.now() - now}ms`) */));
  }
}
