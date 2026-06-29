import React, { useState } from "react";
import { get } from '@app/core/network/http';
import { SWAPI, type SWPeopleI } from '@app/shared/types';

export function useSearch() {
  const [boxItems, setBoxItems] = useState<SWPeopleI[]>([]);

  const filterApiResponse = (items: SWPeopleI[], keyword: string) => {
    let filteredItems: SWPeopleI[] = [];

    if (Array.isArray(items)) {
      filteredItems = items?.filter((item: SWPeopleI) => {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      });
    }

    setBoxItems(filteredItems);
  };

  // Should `useCallBack` be implemented here if `memo` is implemented in `SearchBox`?
  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = evt.target.value;

    if (keyword.trim() === '') {
      setBoxItems([]);
      return;
    }

    console.log('🛜 Calling SWApi');

    get(SWAPI.PEOPLE)
      .then((res) => {
        filterApiResponse(res, keyword);
      })
      .catch((error) => {
        setBoxItems([]);
        console.error(`An error calling the API ${SWAPI.PEOPLE} ocurred.`);
        console.error(error);
      })
  };

  return {
    boxItems,
    handleSearch
  }
}