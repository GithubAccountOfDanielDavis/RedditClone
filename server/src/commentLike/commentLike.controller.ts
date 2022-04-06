import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommentLikeService } from "./commentLike.service";
import { CommentLikeControllerBase } from "./base/commentLike.controller.base";

@swagger.ApiTags("commentLikes")
@common.Controller("commentLikes")
export class CommentLikeController extends CommentLikeControllerBase {
  constructor(
    protected readonly service: CommentLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
