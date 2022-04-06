import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  body?: StringFilter;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
