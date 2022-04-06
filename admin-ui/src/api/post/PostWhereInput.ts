import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  body?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  community?: CommunityWhereUniqueInput;
  creator?: UserWhereUniqueInput;
  id?: StringFilter;
  title?: StringFilter;
};
