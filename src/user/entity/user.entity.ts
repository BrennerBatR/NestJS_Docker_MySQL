import {
  BaseEntity,
  Entity,
  Unique,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { Socket } from "../../socket/entity/socket.entity";

@Entity()
@Unique(["cpf"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Column()
  userName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Column()
  password: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Column({ length: 11 })
  cpf: string;

  @CreateDateColumn({
    type: "timestamp",
    name: "create_date",
  })
  createDate: string;

  @UpdateDateColumn({
    type: "timestamp",
    name: "update_date",
    select: false,
  })
  updateDate: string;

  @Column({ type: "bool", name: "active", default: true })
  active: boolean;

  @OneToMany(
    () => Socket,
    socket => socket.user
  )
  sockets: Socket[];
}
