import { MouseEventHandler } from "react";

export type PostCardType = {
    id?: string;
    voteCount?: number;
    title?: string;
    description?: string;
    user?: string;
    onUpvote?: MouseEventHandler<HTMLDivElement>;
    onDownvote?: MouseEventHandler<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLDivElement>;
  };