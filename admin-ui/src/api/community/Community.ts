import { User } from "../user/User";
import { Post } from "../post/Post";

export type Community = {
  createdAt: Date;
  id: string;
  moderators?: Array<User>;
  name: string;
  owner?: User;
  posts?: Array<Post>;
  subscribers?: Array<User>;
  updatedAt: Date;
};
