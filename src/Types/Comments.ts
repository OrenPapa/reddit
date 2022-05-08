export type Comments = Comment[];

export type Comment = {
  id: string;
  postId: string;
  name: string;
  body: string;
};
