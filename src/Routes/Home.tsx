import { useState, useEffect } from "react";
import { ShowCards } from "../ShowCards";
import { Header } from "../Header";
import { Footer } from "../Footer";
import onLike from "../likeActive.png";
import likes from "../like.png";
import { Link } from "react-router-dom";
import s from "../like.module.css";

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
  likedHP: string[];
  like: (name: string) => void;
  dislike: (name: string) => void;
};

export function Home({ likedHP, like, dislike }: Props) {
  const [cardsHP, setCardsHP] = useState<HarryObj[]>([]);
  const [name, setName] = useState("");
  const [selectSchool, setSelectSchool] = useState("");
  const [viewCurrentPage, setViewCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function hp() {
      try {
        const url = "http://hp-api.herokuapp.com/api/characters";
        const response = await fetch(url);
        const data: HarryObj[] = await response.json();
        const dataArr = data
          .map((elem) => ({
            ...elem,
            liked: false,
          }))
          .filter((elem) => data.lastIndexOf(elem) === data.indexOf(elem));
        setCardsHP(dataArr);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }
    hp();
  }, []);

  useEffect(() => {
    setViewCurrentPage(1);
  }, [name, selectSchool, cardsPerPage]);

  function hundleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value.toLowerCase());
  }

  function hundleChangeSchool(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectSchool(event.target.value);
  }

  function hundlePerPage(event: React.ChangeEvent<HTMLSelectElement>) {
    setCardsPerPage(+event.target.value);
  }

  function hundleHeartClick(cardsHP: HarryObj[]) {
    like(cardsHP.name);
  }

  const filterMagic = cardsHP.filter(
    (elem) =>
      elem.name.toLowerCase().includes(name) &&
      elem.house.includes(selectSchool)
  );

  const lastPage = viewCurrentPage * cardsPerPage;
  const firstPage = lastPage - cardsPerPage;
  const indexPage = filterMagic.slice(firstPage, lastPage);

  return (
    <div className="App">
      <Header
        name={name}
        hundleChangeName={hundleChangeName}
        selectSchool={selectSchool}
        hundleChangeSchool={hundleChangeSchool}
      />
      <>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong...</p>}
        {filterMagic.length > 0 &&
          indexPage.map((elem) => (
            <ShowCards
              onHeartClick={hundleHeartClick}
              liked={elem.liked ? onLike : likes}
              key={elem.name}
              image={elem.image === "" ? null : elem.image}
              name={elem.name}
              actor={elem.actor}
              gender={elem.gender}
              house={elem.house}
              core={elem.wand.core}
              alive={elem.alive === true ? "true" : "false"}
            />
          ))}
      </>
      <Footer
        viewCurrentPage={viewCurrentPage}
        totalPage={Math.ceil(filterMagic.length / cardsPerPage)}
        onPageChange={setViewCurrentPage}
        cardsPerPage={cardsPerPage}
        hundlePerPage={hundlePerPage}
      />
      <Link to="/Liked" className={s.button}>
        <span className={s.btnText}>Show Liked</span>
      </Link>
    </div>
  );
}
