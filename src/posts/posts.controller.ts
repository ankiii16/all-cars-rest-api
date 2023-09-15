import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) {}

  @Get()
  getAllPosts(): string {
    return this.postService.getAllPosts();
  }

  @Post()
  addPost(): string {
    return this.postService.addPost({
        postId: 212,
        title: "ABC Car For Sale",
        Price: - "20",
        recurringPeriodInWeeks: 1
    });
  }
}
