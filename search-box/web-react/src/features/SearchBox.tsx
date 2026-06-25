import type { SWPeopleI } from "@app/shared/types";
import { useSearch } from "./search-box";

interface SearchBoxI {
  placeholderText: string;
}

function DisplayBoxItems({ items }: { items: SWPeopleI[] }) {
  const itemsList = () => (
    <ul>
      {
        items?.map((item: SWPeopleI) => {
          return <li key={item.url}> {item.name} </li>
        })
      }
    </ul>
  );

  return <>
    {
      items?.length
        ? itemsList()
        : <p> No results were found or an error happened </p>
    }
  </>;
}

export default function SearchBox({ placeholderText }: SearchBoxI) {
  const { boxItems, handleSearch } = useSearch();

  return (
    <>
      <input
        type="text"
        onChange={handleSearch}
        aria-label={placeholderText}
        placeholder={placeholderText} />
      <DisplayBoxItems items={boxItems} />
    </>
  )
}