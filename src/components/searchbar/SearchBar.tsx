import React from "react";
import SearchBarWrapper from "./SearchBarWrapper";
interface SearchBarProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchBar = ({ changeHandler }: SearchBarProps) => {
  return (
    <SearchBarWrapper>
      <div>
        <input
          placeholder="search"
          className="serachBarInput"
          type="text"
          onChange={changeHandler}
        ></input>
      </div>
    </SearchBarWrapper>
  );
};
