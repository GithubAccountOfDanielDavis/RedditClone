import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  body: string;
  creator: UserWhereUniqueInput;
  post: PostWhereUniqueInput;
};
