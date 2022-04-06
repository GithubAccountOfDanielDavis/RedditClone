import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
