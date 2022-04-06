import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  body?: SortOrder;
  communityId?: SortOrder;
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
