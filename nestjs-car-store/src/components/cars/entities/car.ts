import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "@nestjs/graphql";

@Entity({ name: "cars" })
@ObjectType()
export class Car {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  dailyPrice: number;

  @Field()
  @Column()
  mileage: string;

  @Field()
  @Column()
  gas: string;

  @Field()
  @Column()
  thumbnailUrl: string;
}