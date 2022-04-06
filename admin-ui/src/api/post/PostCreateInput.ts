import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  body?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  community: CommunityWhereUniqueInput;
  creator: UserWhereUniqueInput;
  title: string;
};
