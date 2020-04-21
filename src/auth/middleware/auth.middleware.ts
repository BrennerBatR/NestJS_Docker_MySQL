import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const date = new Date();
    console.log("MIDDLEWARE! ", date.getHours() + ":" + date.getMinutes());
    next();
  }
}
