import React, { useState } from "react";
import { get } from '@app/core/network/http';
import { SWAPI, type SWPeopleI } from '@app/shared/types';

export function useSearch() {
  const [boxItems, setBoxItems] = useState<SWPeopleI[]>([]);

  const filterApiResponse = (items: SWPeopleI[], keyword: string) => {
    const filteredItems = items.filter((item: SWPeopleI) => {
      return item.name.includes(keyword);
    });

    setBoxItems(filteredItems);
  };

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = evt.target.value;

    if (!keyword) {
      setBoxItems([]);
      return;
    }

    console.log('🛜 Calling SWApi');

    get(SWAPI.PEOPLE)
      .then((res) => {
        filterApiResponse(res, keyword);
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return {
    boxItems,
    handleSearch
  }
}