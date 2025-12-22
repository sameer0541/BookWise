interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
}
interface SignUpProps {
  fullName: string;
  email: string;
  universityId: string;
  universityCard: string;
  password: string;
}
