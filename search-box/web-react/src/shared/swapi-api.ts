import { get } from "@app/core/network/http";
import { SWAPI } from "./types";

interface SwapiCategoriesI {
  films: string;
  people: string;
  planets: string;
  species: string;
  vehicles: string;
  starships: string;
}

interface SwapiCategoryI {
  key: keyof SwapiCategoriesI;
  value: string;
};

const TRANSFORMED_FUNCTIONS = {
  swapiCategoriesToObjectArray: swapiCategoriesToObjectArray
};

export type TransformedFunctionsT = keyof typeof TRANSFORMED_FUNCTIONS;

// TODO: Update it to "toObjectArray" and make it not specific for swapi categories only
function swapiCategoriesToObjectArray(swapiObj: SwapiCategoriesI): SwapiCategoryI[] {
  const swapiCategories: SwapiCategoryI[] = [];

  let key: keyof SwapiCategoriesI;
  for (key in swapiObj) {
    let swapiValue = swapiObj[key].slice(23);
    swapiValue = swapiValue.charAt(0).toUpperCase() + swapiValue.slice(1);
    swapiCategories.push({
      key,
      value: swapiValue
    })
  }

  return swapiCategories;
}


export async function getSwapiCategories (fnToTransform?: TransformedFunctionsT) {
  let swapiInfo = await get(SWAPI.INFO);

  if (!swapiInfo || !Object.keys(swapiInfo)) return null;

  if (!fnToTransform) return swapiInfo;

  swapiInfo = TRANSFORMED_FUNCTIONS[fnToTransform](swapiInfo);
  
  return swapiInfo;
}
