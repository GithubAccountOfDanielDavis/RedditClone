import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PostLikeServiceBase } from "./base/postLike.service.base";

@Injectable()
export class PostLikeService extends PostLikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
