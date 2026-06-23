import type { SWPeopleI } from "@app/shared/types";
import { useSearch } from "./search-box";

interface SearchBoxI {
  placeholderText: string;
}

function DisplayBoxItems({ items }: { items: SWPeopleI[] }) {
  return (
    <ul>
      {
        items?.map((item: SWPeopleI) => {
          return <li key={item.url}> {item.name} </li>
        })
      }
    </ul>
  );
}

export default function SearchBox({ placeholderText }: SearchBoxI) {
  const { boxItems, handleSearch } = useSearch();

  return (
    <>
      <input
        type="text"
        placeholder={placeholderText}
        onChange={handleSearch} />
      <DisplayBoxItems items={boxItems} />
    </>
  )
}