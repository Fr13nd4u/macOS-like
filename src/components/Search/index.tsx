import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Context } from "../../context";

import "./Search.scss";

const Search: FC = () => {
  const { data, setData } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setData(
      data.filter((person: any) =>
        person.name.toLowerCase().includes(searchTerm)
      )
    );
  }, [searchTerm]);

  return (
    <label>
      <SearchIcon color="secondary" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={searchHandler}
      />
    </label>
  );
};

export default Search;
