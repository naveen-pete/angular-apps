import { Post } from './post.model';

export interface PostData {
  posts: Post[];
  count: number;
}