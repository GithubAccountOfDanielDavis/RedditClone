import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type CommunityWhereInput = {
  id?: StringFilter;
  moderators?: UserListRelationFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
  posts?: PostListRelationFilter;
  subscribers?: UserListRelationFilter;
};
