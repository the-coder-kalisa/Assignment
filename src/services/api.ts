import axios from "../lib/axios";
import type { AxiosResponse } from "axios";
import { Cat } from "../types/cats";
import { Breed } from "../types/breed";
import { CartsImage } from "../types/cartsImages";

const getBreeds = async (): Promise<Breed[]> => {
  const breeds: AxiosResponse<Breed[]> = await axios.get("/v1/breeds");
  return breeds.data;
};

const getCatsByBreedAndPage = async (
  breedId: string,
  page: number
): Promise<CartsImage[]> => {
  const catsByBreed: AxiosResponse<CartsImage[]> = await axios.get(
    `/v1/images/search?page=${page}&limit=10&breed_id=${breedId}`
  );
  console.log(catsByBreed);
  return catsByBreed.data;
};

const getSingleCatByID = async (catId: string): Promise<Cat> => {
  const cat: AxiosResponse<Cat> = await axios.get(`v1/images/${catId}`);
  return cat.data;
};

export default { getBreeds, getCatsByBreedAndPage, getSingleCatByID };
