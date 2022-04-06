import { CommentLikeUpdateManyWithoutUsersInput } from "./CommentLikeUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { PostLikeUpdateManyWithoutUsersInput } from "./PostLikeUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  commentLikes?: CommentLikeUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  moderates?: CommunityUpdateManyWithoutUsersInput;
  ownedCommunities?: CommunityUpdateManyWithoutUsersInput;
  password?: string;
  postLikes?: PostLikeUpdateManyWithoutUsersInput;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  subscriptions?: CommunityUpdateManyWithoutUsersInput;
  username?: string;
};
