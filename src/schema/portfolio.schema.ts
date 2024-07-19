import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';


export type PortfolioDocument = HydratedDocument<Portfolio>;

@ObjectType()
@Schema()
export class Portfolio {

  @Field((type) => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  channel: string;

  @Field()
  @Prop({ required: true })
  country: string;

  @Field()
  @Prop({ required: true })
  customerCode: string;

  @Field()
  @Prop({ type: Date})
  createdDate: Date;

}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);