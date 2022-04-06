import { CommentLikeListRelationFilter } from "../commentLike/CommentLikeListRelationFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { CommunityListRelationFilter } from "../community/CommunityListRelationFilter";
import { PostLikeListRelationFilter } from "../postLike/PostLikeListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type UserWhereInput = {
  commentLikes?: CommentLikeListRelationFilter;
  comments?: CommentListRelationFilter;
  id?: StringFilter;
  moderates?: CommunityListRelationFilter;
  ownedCommunities?: CommunityListRelationFilter;
  postLikes?: PostLikeListRelationFilter;
  posts?: PostListRelationFilter;
  subscriptions?: CommunityListRelationFilter;
  username?: StringFilter;
};
