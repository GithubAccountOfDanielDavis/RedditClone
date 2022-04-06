import { Module } from "@nestjs/common";
import { CommentLikeModuleBase } from "./base/commentLike.module.base";
import { CommentLikeService } from "./commentLike.service";
import { CommentLikeController } from "./commentLike.controller";
import { CommentLikeResolver } from "./commentLike.resolver";

@Module({
  imports: [CommentLikeModuleBase],
  controllers: [CommentLikeController],
  providers: [CommentLikeService, CommentLikeResolver],
  exports: [CommentLikeService],
})
export class CommentLikeModule {}
