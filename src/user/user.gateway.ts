import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
} from "@nestjs/websockets";
import { UseInterceptors } from "@nestjs/common";
import { GatewayInterceptor } from "../auth/interceptor/gateway.interceptor";
import { Socket, Server } from "socket.io";
import { Logger } from "@nestjs/common";

@UseInterceptors(GatewayInterceptor)
@WebSocketGateway({ namespace: "users", transports: ["websocket"] })
export class UserGateway {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger("AppGateway");

  afterInit(server: Server) {
    this.logger.log("Init");
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage("newMsg")
  async findAll(client: Socket, data: any) {
    const obj = {
      msg: data.msg,
      user: client.id,
    };
    client.emit("msgToClient", obj);

    /*    return from(contacts.userContact).pipe(
      map(item => ({ event: 'contacts', data: item })),
    ); */
  }

  @SubscribeMessage("identity")
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  @SubscribeMessage("newContact")
  async newContact(client: Socket, data: any) {
    /* const contact = await this.userContactService.create(
      data.userContact,
      data.externalId,
    ); */
    client.emit("contacts", "NEW!!");
  }
}
