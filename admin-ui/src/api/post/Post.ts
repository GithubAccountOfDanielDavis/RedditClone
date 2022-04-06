import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { User } from "../user/User";
import { PostLike } from "../postLike/PostLike";

export type Post = {
  body: string | null;
  comments?: Array<Comment>;
  community?: Community;
  createdAt: Date;
  creator?: User;
  id: string;
  postLikes?: Array<PostLike>;
  title: string;
  updatedAt: Date;
};
