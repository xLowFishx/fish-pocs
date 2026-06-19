import type { SWPeopleI } from "@app/shared/types";

interface SearchBoxI {
  placeholderText: string;
  fn: (keyword: string) => void;
  boxItems: SWPeopleI[];
}

export default function SearchBox({ placeholderText, fn, boxItems }: SearchBoxI) {
  return (
    <>
      <input 
        type="text" 
        placeholder={placeholderText} 
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {fn(evt.target.value)}} />
      <ul>
        {
          boxItems?.map((item: SWPeopleI, index: number) => {
            return <li key={index.toString()}> {item.name} </li>
          })
        }
      </ul>
    </>
  )
}