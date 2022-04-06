import { SortOrder } from "../../util/SortOrder";

export type PostLikeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
