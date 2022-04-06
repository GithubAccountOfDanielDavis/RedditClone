import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type CommentLikeWhereInput = {
  comment?: CommentWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  value?: IntFilter;
};
