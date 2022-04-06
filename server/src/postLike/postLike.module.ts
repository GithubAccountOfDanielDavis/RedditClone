import { Module } from "@nestjs/common";
import { PostLikeModuleBase } from "./base/postLike.module.base";
import { PostLikeService } from "./postLike.service";
import { PostLikeController } from "./postLike.controller";
import { PostLikeResolver } from "./postLike.resolver";

@Module({
  imports: [PostLikeModuleBase],
  controllers: [PostLikeController],
  providers: [PostLikeService, PostLikeResolver],
  exports: [PostLikeService],
})
export class PostLikeModule {}
