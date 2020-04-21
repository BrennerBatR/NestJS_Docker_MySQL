import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from "@nestjs/websockets";
import { Socket } from "dgram";
import { UseInterceptors } from "@nestjs/common";
import { GatewayInterceptor } from "../auth/interceptor/gateway.interceptor";

//@UseGuards(SocketGuard)
@UseInterceptors(GatewayInterceptor)
@WebSocketGateway({ namespace: "users", transports: ["websocket"] })
export class UserGateway {
  @SubscribeMessage("users")
  async findAll(client: Socket, data: any) {
    console.log("SOCKET" , client);
    console.log("ENTROU!", data);
    client.emit("teste", "recebido");

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
