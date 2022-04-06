import { Comment } from "../comment/Comment";
import { User } from "../user/User";

export type CommentLike = {
  comment?: Comment;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
  value: number;
};
