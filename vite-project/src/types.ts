export interface prData {
  number: number;
  title: string;
  url: string;
  state: 'open' | 'closed';
  author: {
    username: string;
    avatar: string;
  };
  createdAt: string;
  reviewers: [
    {
      username: string;
      avatar: string;
    }
  ];
  lastActionDate: string;
}
