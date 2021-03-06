import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Comment } from "./comment.model";
import { CommentResolver } from "./comment.resolver";
import { CommentService } from "./comment.service";

import { BalanceGame } from "../balance-game/balance-game.model";
import { BalanceGameSelectionVoteModule } from "../balance-game-selection-vote/balance-game-selection-vote.module";
import { NotificationModule } from "../notification/notification.module";

@Module({
  imports: [TypeOrmModule.forFeature([Comment, BalanceGame]), BalanceGameSelectionVoteModule, NotificationModule],
  providers: [CommentResolver, CommentService],
  exports: [],
})
export class CommentModule {}
