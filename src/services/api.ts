import axios from "../lib/axios";
import type { AxiosResponse } from "axios";
import { Cat } from "../types/cats";

const getBreeds = async (): Promise<string[]> => {
  const breeds: AxiosResponse<string[]> = await axios.get("/breeds");
  return breeds.data;
};

const getCatsByBreedAndPage = async (
  breedId: string,
  page: number
): Promise<string[]> => {
  const catsByBreed: AxiosResponse<string[]> = await axios.get(
    `v1/images/search?page=${page}&limit=10&breed_id=${breedId}`
  );
  return catsByBreed.data;
};

const getSingleCatByID = async (catId: string): Promise<Cat> => {
  const cat: AxiosResponse<Cat> = await axios.get(`/images/${catId}`);
  return cat.data;
};

export default { getBreeds, getCatsByBreedAndPage, getSingleCatByID };
