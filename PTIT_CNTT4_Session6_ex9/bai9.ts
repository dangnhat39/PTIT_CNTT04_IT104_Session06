class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    public addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[];
    public comments: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    public addLike(userId: number): void {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    public createPost(postId: number, content: string): Post {
        const post = new Post(postId, this.id, content);
        this.posts.push(post);
        return post;
    }

    public comment(post: Post, commentId: number, content: string, parentComment?: Comment): void {
        const newComment = new Comment(commentId, this.id, content);
        if (parentComment) {
            parentComment.addReply(newComment);
        } else {
            post.addComment(newComment);
        }
    }

    public follow(user: User): void {
        if (!user.followers.includes(this)) {
            user.followers.push(this);
        }
    }

    public likePost(post: Post): void {
        post.addLike(this.id);
    }

    public viewFeed(): void {
        console.log(`--- Bảng tin của User ${this.id} ---`);
        this.followers.forEach(user => {
            user.posts.forEach(post => {
                console.log(`Bài đăng ${post.id} của User ${user.id}: ${post.content}`);
            });
        });
    }
}

// --- Test ---
const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

user1.follow(user2);
user1.follow(user3);

const post1 = user2.createPost(101, "Hello từ User 2!");
const post2 = user3.createPost(102, "User 3 đang ăn cơm.");

user1.likePost(post1);
user1.comment(post1, 201, "Hay quá!");
const cmtReply = new Comment(202, user1.id, "Cảm ơn!");
user2.comment(post1, 203, "Trả lời bình luận", post1.comments[0]);

user1.viewFeed();
