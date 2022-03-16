type Props = {
  likedHP: string[];
  like: (name: string) => void;
  dislike: (name: string) => void;
};

export function Liked(props: Props) {
  return <p>Liked</p>;
}
