import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostLikeUpdateManyWithoutPostsInput } from "./PostLikeUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  body?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  community?: CommunityWhereUniqueInput;
  creator?: UserWhereUniqueInput;
  postLikes?: PostLikeUpdateManyWithoutPostsInput;
  title?: string;
};
