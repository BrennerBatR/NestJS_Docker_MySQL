import { IoAdapter } from "@nestjs/platform-socket.io";
import { ServerOptions } from "socket.io";

//const redisAdapter = redisIoAdapter({ host: "localhost", port: 6379 });

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): any {
    console.log("OLAAA");
    const server = super.createIOServer(port, options);
   // server.adapter(redisAdapter);
    return server;
  }
}
