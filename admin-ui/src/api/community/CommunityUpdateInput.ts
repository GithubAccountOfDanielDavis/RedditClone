import { UserUpdateManyWithoutCommunitiesInput } from "./UserUpdateManyWithoutCommunitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostUpdateManyWithoutCommunitiesInput } from "./PostUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  moderators?: UserUpdateManyWithoutCommunitiesInput;
  name?: string;
  owner?: UserWhereUniqueInput;
  posts?: PostUpdateManyWithoutCommunitiesInput;
  subscribers?: UserUpdateManyWithoutCommunitiesInput;
};
