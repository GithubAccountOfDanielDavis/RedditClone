import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostLikeCreateNestedManyWithoutPostsInput } from "./PostLikeCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  body?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
  community: CommunityWhereUniqueInput;
  creator: UserWhereUniqueInput;
  postLikes?: PostLikeCreateNestedManyWithoutPostsInput;
  title: string;
};
