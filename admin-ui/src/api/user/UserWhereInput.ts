import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { CommunityListRelationFilter } from "../community/CommunityListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  id?: StringFilter;
  moderates?: CommunityListRelationFilter;
  ownedCommunities?: CommunityListRelationFilter;
  posts?: PostListRelationFilter;
  subscriptions?: CommunityListRelationFilter;
  username?: StringFilter;
};
