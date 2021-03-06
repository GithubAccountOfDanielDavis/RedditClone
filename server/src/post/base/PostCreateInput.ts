/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { Type } from "class-transformer";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { PostLikeCreateNestedManyWithoutPostsInput } from "./PostLikeCreateNestedManyWithoutPostsInput";
@InputType()
class PostCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  body?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPostsInput;

  @ApiProperty({
    required: true,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @Field(() => CommunityWhereUniqueInput)
  community!: CommunityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  creator!: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PostLikeCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => PostLikeCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => PostLikeCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  postLikes?: PostLikeCreateNestedManyWithoutPostsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { PostCreateInput };
