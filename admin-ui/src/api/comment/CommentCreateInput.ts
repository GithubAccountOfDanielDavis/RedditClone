import { CommentLikeCreateNestedManyWithoutCommentsInput } from "./CommentLikeCreateNestedManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  body: string;
  commentLikes?: CommentLikeCreateNestedManyWithoutCommentsInput;
  creator: UserWhereUniqueInput;
  post: PostWhereUniqueInput;
};
