import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PostLikeResolverBase } from "./base/postLike.resolver.base";
import { PostLike } from "./base/PostLike";
import { PostLikeService } from "./postLike.service";

@graphql.Resolver(() => PostLike)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PostLikeResolver extends PostLikeResolverBase {
  constructor(
    protected readonly service: PostLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
