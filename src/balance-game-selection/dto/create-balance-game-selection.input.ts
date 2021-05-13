import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateBalanceGameSelectionInput {
  @Field()
  balanceGameId?: string;

  @Field()
  description?: string;

  @Field()
  subText?: string;

  @Field()
  textColor?: string;

  @Field()
  backgroundColor?: string;

  @Field()
  backgroundImage?: string;

  @Field()
  order: number;
}
