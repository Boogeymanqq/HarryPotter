import s from "./like.module.css";

type HarryObj = {
  liked: boolean;
  image: string;
  name: string;
  actor: string;
  gender: string;
  house: string;
  wand: {
    core: string;
  };
  alive: boolean;
};

type Props = {
  image: any;
  name: string;
  actor: string;
  gender: string;
  house: string;
  core: string;
  alive: string;
  liked: string;
  onHeartClick: (cardsHP: HarryObj[]) => void;
};

export const ShowCards = ({
  image,
  name,
  actor,
  gender,
  house,
  core,
  alive,
  liked,
  onHeartClick,
}: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <img src={image} alt="photos"></img>
      <button className={s.like} type="button" onClick={() => onHeartClick}>
        <img src={liked} alt="" />
      </button>
      <p>{name}</p>
      <p>Actor: {actor}</p>
      <p>Gender: {gender}</p>
      <p>House: {house}</p>
      <p>Wand core: {core}</p>
      <p>Alive: {alive}</p>
    </div>
  );
};
