import { BalanceGame } from "../balance-game/balance-game.model";
import { Notification } from "../notification/notification.model";
import { Comment } from "../comment/comment.model";
import { User } from "../user/user.model";
export declare class Reply {
    id: string;
    user: User;
    userId: string;
    balanceGame: BalanceGame;
    balanceGameId: string;
    comment: Comment;
    commentId: string;
    color?: string;
    content: string;
    status: string;
    notifications: Notification[];
    createdAt: string;
    updatedAt: Date;
}
