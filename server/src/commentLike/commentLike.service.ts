import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CommentLikeServiceBase } from "./base/commentLike.service.base";

@Injectable()
export class CommentLikeService extends CommentLikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
