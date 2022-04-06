import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  body?: string;
  creator?: UserWhereUniqueInput;
  post?: PostWhereUniqueInput;
};
