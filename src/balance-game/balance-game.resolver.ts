import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { BalanceGameService } from "./balance-game.service";
import { BalanceGame } from "./balance-game.model";
import { CreateBalanceGameInput } from "./dto/create-balance-game.input";
import { UpdateBalanceGameInput } from "./dto/update-balance-game.input";

@Resolver(() => BalanceGame)
export class BalanceGameResolver {
  constructor(private readonly balanceGameService: BalanceGameService) {}

  // :TODO 미들웨어 추가 [로그인 / ]
  @Mutation(() => BalanceGame)
  async createBalanceGame(
    @Args("createBalanceGameInput") createBalanceGameInput: CreateBalanceGameInput
  ): Promise<BalanceGame> {
    return await this.balanceGameService.create(createBalanceGameInput);
  }

  // 검색 정렬: [ 최신순 / 인기순 ]
  // 검색 기준: [ 카테고리 / ]
  @Query(() => [BalanceGame], { name: "balanceGames" })
  async findAll(): Promise<BalanceGame[]> {
    const balanceGames = await this.balanceGameService.findAll();

    console.log(balanceGames);
    return balanceGames;
  }

  @Query(() => BalanceGame, { name: "balanceGame" })
  async findOne(@Args("id") id: string): Promise<BalanceGame> {
    return this.balanceGameService.findOne(id);
  }

  @Mutation(() => BalanceGame)
  updateBalanceGame(
    @Args("id") id: string,
    @Args("updateBalanceGameInput") updateBalanceGameInput: UpdateBalanceGameInput
  ) {
    return this.balanceGameService.update(id, updateBalanceGameInput);
  }

  // @Mutation(() => BalanceGame)
  // removeBalanceGame(@Args("id", { type: () => Int }) id: number) {
  //   return this.balanceGameService.remove(id);
  // }
}