import { CommentLike } from "../commentLike/CommentLike";
import { User } from "../user/User";
import { Post } from "../post/Post";

export type Comment = {
  body: string;
  commentLikes?: Array<CommentLike>;
  createdAt: Date;
  creator?: User;
  id: string;
  post?: Post;
  updatedAt: Date;
};
