import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Post } from "./post.model";
import { PostData } from "./post-data.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private postsUpdated = new Subject<PostData>();

  constructor(private http: HttpClient, private router: Router) { }

  getPosts(postsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; posts: any; maxPosts: number }>(
        "http://localhost:3000/api/posts" + queryParams
      )
      .pipe(
        map(postData => {
          return {
            posts: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                id: post._id,
                imagePath: post.imagePath
              };
            }),
            count: postData.maxPosts
          };
        })
      )
      .subscribe((postData: PostData) => {
        this.postsUpdated.next(postData);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{ _id: string; title: string; content: string, imagePath: string }>(
      "http://localhost:3000/api/posts/" + id
    ).pipe(
      map(({ _id: id, title, content, imagePath }) => ({ id, title, content, imagePath }))
    );
  }

  addPost(title: string, content: string, image: File) {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("image", image, title);

    this.http
      .post<{ message: string, post: Post }>(
        "http://localhost:3000/api/posts",
        postData
      )
      .subscribe(() => {
        this.router.navigate(["/"]);
      });
  }

  updatePost(id: string, title: string, content: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === "object") {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("content", content);
      postData.append("image", image, title);
    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        imagePath: image
      };
    }
    this.http.put<{ message: string, post: Post }>("http://localhost:3000/api/posts/" + id, postData)
      .subscribe(() => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string) {
    return this.http.delete("http://localhost:3000/api/posts/" + postId);
  }
}
