import { ObjectType, Field, ID } from "@nestjs/graphql";
import { UserProfileService } from "../user-profile/user-profile.service";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { UserProfile } from "../user-profile/user-profile.model";
import { BalanceGame } from "../balance-game/balance-game.model";
import { BalanceGameSelectionVote } from "../balance-game-selection-vote/balance-game-selection-vote.model";
import { BalanceGameThumb } from "../balance-game-thumb/balance-game-thumb.model";
import { Comment } from "../comment/comment.model"
import { Reply } from "src/reply/reply.model";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field((type) => String)
  @Column()
  socialId: string;

  @Field((type) => String)
  @Column()
  platformType: string;

  @OneToOne((type) => UserProfile, (profile) => profile.user, { eager: true })
  @JoinColumn()
  profile: UserProfile;

  @OneToMany((type) => BalanceGame, (balanceGame) => balanceGame.user)
  balanceGames: BalanceGame[];

  @OneToMany((type) => BalanceGameSelectionVote, (balanceGameSelectionVote) => balanceGameSelectionVote.user)
  balanceGameSelectionVotes: BalanceGameSelectionVote[];

  @OneToMany(() => BalanceGameThumb, (balanceGameThumb) => balanceGameThumb.user)
  balanceGameThumbs: BalanceGameThumb[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Reply, (reply) => reply.user)
  replies: Reply[]

  // :TODO enum으로 수정?
  @Field((type) => String)
  @Column()
  status: string;

  @Field((type) => Date)
  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @Field((type) => Date)
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
