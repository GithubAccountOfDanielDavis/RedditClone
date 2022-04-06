import { PostLike as TPostLike } from "../api/postLike/PostLike";

export const POSTLIKE_TITLE_FIELD = "id";

export const PostLikeTitle = (record: TPostLike): string => {
  return record.id || record.id;
};
