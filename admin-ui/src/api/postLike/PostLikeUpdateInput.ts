import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostLikeUpdateInput = {
  post?: PostWhereUniqueInput;
  user?: UserWhereUniqueInput;
  value?: number;
};
