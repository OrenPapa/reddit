import { MouseEventHandler } from "react";

export type PostCardType = {
    id?: string;
    voteCount?: number;
    title?: string;
    description?: string;
    user?: string;
    onUpvote?: () => void;
    onDownvote?: () => void;
    onClick?: () => void;
  };