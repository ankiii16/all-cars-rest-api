import { Injectable } from '@nestjs/common';

const object = Array(10).fill({
    postId: 123,
    title: "ABC Car For Sale",
    Price: - "20",
    recurringPeriodInWeeks: 1
})

@Injectable()
export class PostsService {
    getAllPosts(): any {
        return object
    }

    addPost(obj:any): any {
        object.push(obj)
        return object
    }
}
