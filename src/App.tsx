import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Liked } from "./Routes/Liked";

export function App() {
  const [likedHP, setLikedHP] = useState<string[]>([]);

  const like = (name: string) => setLikedHP([...likedHP, name]);
  const dislike = (name: string) =>
    setLikedHP(likedHP.filter((likedName) => name != likedName));
  console.log(likedHP);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home likedHP={likedHP} like={like} dislike={dislike} />}
      />
      <Route
        path="Liked"
        element={<Liked likedHP={likedHP} like={like} dislike={dislike} />}
      />
    </Routes>
  );
}
