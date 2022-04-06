import { StringFilter } from "../../util/StringFilter";
import { CommentLikeListRelationFilter } from "../commentLike/CommentLikeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  body?: StringFilter;
  commentLikes?: CommentLikeListRelationFilter;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
