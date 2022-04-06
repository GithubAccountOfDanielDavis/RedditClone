import { CommentLikeCreateNestedManyWithoutUsersInput } from "./CommentLikeCreateNestedManyWithoutUsersInput";
import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { PostLikeCreateNestedManyWithoutUsersInput } from "./PostLikeCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  commentLikes?: CommentLikeCreateNestedManyWithoutUsersInput;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  moderates?: CommunityCreateNestedManyWithoutUsersInput;
  ownedCommunities?: CommunityCreateNestedManyWithoutUsersInput;
  password: string;
  postLikes?: PostLikeCreateNestedManyWithoutUsersInput;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  subscriptions?: CommunityCreateNestedManyWithoutUsersInput;
  username: string;
};
