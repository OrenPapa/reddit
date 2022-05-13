export type Posts = Post[];

export type Post = {
  id: string;
  title: string;
  user: string;
  body: string;
  upvotes: number;
  downvotes: number;
  isUpvoted: boolean; 
  isDownvoted: boolean
};
