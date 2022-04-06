import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PostLikeWhereInput = {
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  user?: UserWhereUniqueInput;
  value?: IntFilter;
};
