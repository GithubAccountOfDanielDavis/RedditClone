import { PostLikeWhereInput } from "./PostLikeWhereInput";
import { PostLikeOrderByInput } from "./PostLikeOrderByInput";

export type PostLikeFindManyArgs = {
  where?: PostLikeWhereInput;
  orderBy?: Array<PostLikeOrderByInput>;
  skip?: number;
  take?: number;
};
