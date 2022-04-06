import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostLikeCreateInput = {
  post: PostWhereUniqueInput;
  user: UserWhereUniqueInput;
  value: number;
};
