import axios from "../lib/axios";
import type { AxiosResponse } from "axios";
import { Cat } from "../types/cats";
import { Breed } from "../types/breed";
import {  CatImageData } from "../types/cartsImages";

// logic to check if array objects are equal

function arraysEqual(a: any, b: any) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) return false;
  }
  return true;
}
function isEqual(obj1: any, obj2: any) {
  return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
}


// get all breeds from the api.thecatapi.com
const getBreeds = async (): Promise<Breed[]> => {
  const breeds: AxiosResponse<Breed[]> = await axios.get("/v1/breeds");
  return breeds.data;
};

// get cats by breedId and page
const getCatsByBreedAndPage = async (breedId: string, page: number) => {
  const catsByBreed: AxiosResponse<CatImageData[]> = await axios.get(
    `/v1/images/search?page=${page}&limit=10&breed_id=${breedId}`
  );
  let hasNextPage = catsByBreed.data.length === 10;
  if (hasNextPage) {
    let nextPage = await axios.get(
      `/v1/images/search?page=${page + 1}&limit=10&breed_id=${breedId}`
    );
    hasNextPage = !arraysEqual(catsByBreed.data, nextPage.data);
  }
  return {
    data: catsByBreed.data,
    hasNextPage: hasNextPage,
    page,
  };
};

// get single cat using specified id
const getSingleCatByID = async (catId: string): Promise<Cat> => {
  console.log(catId);
  const cat: AxiosResponse<Cat> = await axios.get(`v1/images/${catId}`);
  return cat.data;
};

export default { getBreeds, getCatsByBreedAndPage, getSingleCatByID };
