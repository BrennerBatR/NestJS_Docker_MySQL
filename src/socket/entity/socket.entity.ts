import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, ManyToOne } from "typeorm";
import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail } from "class-validator";
import { User } from "src/user/entity/user.entity";

@Entity()
export class Socket extends BaseEntity{
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @ApiModelProperty()
  @IsEmail()
  @Column({length: "50"})
  socketId: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @ManyToOne(()=> User, user=> user.sockets)
  user: User

}
