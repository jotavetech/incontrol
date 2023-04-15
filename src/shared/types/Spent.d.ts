type Spent = {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  createdAt: {
    seconds: number;
  };
  value: number;
};
