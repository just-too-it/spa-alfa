export type BookProps = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      small: string;
    };
    averageRating: number;
  };
};
