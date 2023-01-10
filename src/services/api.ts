import axios from "../lib/axios";
import type { AxiosResponse } from "axios";
import { Cat } from "../types/cats";
import { Breed } from "../types/breed";
import { CartsImages } from "../types/cartsImages";

const getBreeds = async (): Promise<Breed[]> => {
  const breeds: AxiosResponse<Breed[]> = await axios.get("/breeds");
  return breeds.data;
};

const getCatsByBreedAndPage = async (
  breedId: string,
  page: number
): Promise<CartsImages[]> => {
  const catsByBreed: AxiosResponse<CartsImages[]> = await axios.get(
    `/images/search?page=${page}&limit=10&breed_id=${breedId}`
  );
  console.log(catsByBreed);
  return catsByBreed.data;
};

const getSingleCatByID = async (catId: string): Promise<Cat> => {
  const cat: AxiosResponse<Cat> = await axios.get(`/images/${catId}`);
  return cat.data;
};

export default { getBreeds, getCatsByBreedAndPage, getSingleCatByID };
