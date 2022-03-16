import React from "react";

type Props = {
  name: string;
  hundleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectSchool: string;
  hundleChangeSchool: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Header = ({
  name,
  hundleChangeName,
  selectSchool,
  hundleChangeSchool,
}: Props) => {
  return (
    <header>
      <div>
        <h1>Harry Potter</h1>
        <p>View all characters from the Harry Potter universe.</p>
      </div>
      <div>
        <input type="text" value={name} onChange={hundleChangeName}></input>
        <label>
          <select value={selectSchool} onChange={hundleChangeSchool}>
            <option value="">All</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Unknown">Unknown</option>
          </select>
        </label>
      </div>
    </header>
  );
};
