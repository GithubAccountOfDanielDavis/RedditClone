import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PostLikeService } from "./postLike.service";
import { PostLikeControllerBase } from "./base/postLike.controller.base";

@swagger.ApiTags("postLikes")
@common.Controller("postLikes")
export class PostLikeController extends PostLikeControllerBase {
  constructor(
    protected readonly service: PostLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
