import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  body?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  community?: CommunityWhereUniqueInput;
  creator?: UserWhereUniqueInput;
  title?: string;
};
