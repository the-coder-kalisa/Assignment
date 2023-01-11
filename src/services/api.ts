import axios from "../lib/axios";
import type { AxiosResponse } from "axios";
import { Cat } from "../types/cats";
import { Breed } from "../types/breed";
import { CartsImage } from "../types/cartsImages";
import _ from "lodash";

const getBreeds = async (): Promise<Breed[]> => {
  const breeds: AxiosResponse<Breed[]> = await axios.get("/v1/breeds");
  return breeds.data;
};

const getCatsByBreedAndPage = async (breedId: string, page: number) => {
  const catsByBreed: AxiosResponse<CartsImage[]> = await axios.get(
    `/v1/images/search?page=${page}&limit=10&breed_id=${breedId}`
  );
  const nextPage = await axios.get(
    `/v1/images/search?page=${page + 1}&limit=10&breed_id=${breedId}`
  );
  return {
    data: {
      ...catsByBreed.data,
    },
    hasNextPage: !arraysEqual(catsByBreed.data, nextPage.data),
    page,
  };
};
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
const getSingleCatByID = async (catId: string): Promise<Cat> => {
  const cat: AxiosResponse<Cat> = await axios.get(`v1/images/${catId}`);
  return cat.data;
};

export default { getBreeds, getCatsByBreedAndPage, getSingleCatByID };
