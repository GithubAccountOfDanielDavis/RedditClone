import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  communityId?: SortOrder;
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
