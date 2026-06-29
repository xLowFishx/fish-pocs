import { useEffect, useState } from "react";
import SearchBox from "@app/features/search-box/SearchBox";
import SelectBox from "@app/features/select-box/SelectBox";
import { getSwapiCategories } from "@app/shared/swapi-api";

const getSelectBoxOptions = async () => {
  // TODO: Do not hard code strings
  const swapiCategories = await getSwapiCategories("swapiCategoriesToObjectArray");
  return swapiCategories || [];
};

// TODO: Instead of an active flag check to use memo to avoid unnecessary re-renders
export default function SwapiSearcher() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let active = true;

    getSelectBoxOptions().then((res) => {
      if (!active) return;
      setOptions(res);
    });

    return () => { active = false; };
  }, []);

  return (
    <>
      <h1>Search Box</h1>
      <div>
        <SelectBox defaultTextOption='-- Choose an option --' options={options} handleChange={(evt) => console.log(evt.target.value)}/>
        <SearchBox placeholderText="Type a star wars character" />
      </div>
    </>
  )
}