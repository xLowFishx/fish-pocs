import Spacer from '@app/components/Spacer'
import MainLogo from '@app/components/MainLogo'
import SearchBox from '@app/features/SearchBox'
import { get } from '@app/core/network/http';
import { useState } from "react";
import type { SWPeopleI } from '@app/shared/types';

export default function Home() {
  const [boxItems, setBoxItems] = useState<SWPeopleI[]>([]);

  const filterApiResponse = (items: SWPeopleI[], keyword: string) => {
    const filteredItems = items.filter((item: SWPeopleI) => {
      return item.name.includes(keyword);
    });

    setBoxItems(filteredItems);
  };

  const handleApiCall = (keyword: string) => {
    if (!keyword) {
      setBoxItems([]);
      return;
    }

    console.log('🛜 Calling SWApi');

    get('https://swapi.info/api/people')
      .then((res) => {
        filterApiResponse(res, keyword);
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return (
    <>
      <Spacer />
      <section id="center">
        <MainLogo />
        <h1>Search Box</h1>
        <SearchBox
          fn={handleApiCall}
          boxItems={boxItems} 
          placeholderText="Type a star wars character"
          />
      </section>
      <Spacer />

      <style href="center" precedence='component'>
        {`
          #center {
            display: flex;
            flex-direction: column;
            gap: 25px;
            place-content: center;
            place-items: center;
            flex-grow: 1;

            @media (max-width: 1024px) {
              padding: 32px 20px 24px;
              gap: 18px;
            }
          }
        `}
      </style>
    </>
  )
}
