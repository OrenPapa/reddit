import { MouseEventHandler } from "react";

export type SubredditCardType = {
    title: string;
    description: string;
    onClick: MouseEventHandler<HTMLDivElement>;
  }
  