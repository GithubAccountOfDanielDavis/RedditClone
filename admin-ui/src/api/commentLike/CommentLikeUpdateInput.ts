import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentLikeUpdateInput = {
  comment?: CommentWhereUniqueInput;
  user?: UserWhereUniqueInput;
  value?: number;
};
