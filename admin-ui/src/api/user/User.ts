import { CommentLike } from "../commentLike/CommentLike";
import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { PostLike } from "../postLike/PostLike";
import { Post } from "../post/Post";

export type User = {
  commentLikes?: Array<CommentLike>;
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  moderates?: Array<Community>;
  ownedCommunities?: Array<Community>;
  postLikes?: Array<PostLike>;
  posts?: Array<Post>;
  roles: Array<string>;
  subscriptions?: Array<Community>;
  updatedAt: Date;
  username: string;
};
