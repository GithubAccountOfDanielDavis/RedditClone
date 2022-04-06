import { CommentLikeUpdateManyWithoutCommentsInput } from "./CommentLikeUpdateManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  body?: string;
  commentLikes?: CommentLikeUpdateManyWithoutCommentsInput;
  creator?: UserWhereUniqueInput;
  post?: PostWhereUniqueInput;
};
