import { Comment } from "../comment/Comment";
import { Community } from "../community/Community";
import { Post } from "../post/Post";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  moderates?: Array<Community>;
  ownedCommunities?: Array<Community>;
  posts?: Array<Post>;
  roles: Array<string>;
  subscriptions?: Array<Community>;
  updatedAt: Date;
  username: string;
};
