export type Subreddits = Subreddit[];
export type Subreddit = {
  id: string;
  title: string;
  description: string;
};
export type SubredditsResponse = {
  status: number;
  data: Subreddits;
};
