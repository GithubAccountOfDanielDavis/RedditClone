import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { CommunityCreateNestedManyWithoutUsersInput } from "./CommunityCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  moderates?: CommunityCreateNestedManyWithoutUsersInput;
  ownedCommunities?: CommunityCreateNestedManyWithoutUsersInput;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  subscriptions?: CommunityCreateNestedManyWithoutUsersInput;
  username: string;
};
