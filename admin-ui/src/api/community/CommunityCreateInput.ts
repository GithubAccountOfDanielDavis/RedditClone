import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PostCreateNestedManyWithoutCommunitiesInput } from "./PostCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  moderators?: UserCreateNestedManyWithoutCommunitiesInput;
  name: string;
  owner: UserWhereUniqueInput;
  posts?: PostCreateNestedManyWithoutCommunitiesInput;
  subscribers?: UserCreateNestedManyWithoutCommunitiesInput;
};
