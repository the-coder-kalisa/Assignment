import { Breed } from "./breed";
import type { Dispatch } from "react";
import { CartsImage } from "./cartsImages";
export interface IContext {
  breeds: Breed[] | null | undefined;
  cats: CartsImage[] | null;
  currentBreed: string | null;
  page: number;
  loadingBreeds: boolean;
  setPage: Dispatch<React.SetStateAction<number>> | null;
  setCurrentBreed: Dispatch<React.SetStateAction<string | null>> | null;
//   setCats: React.Dispatch<React.SetStateAction<CartsImages[] | null>> | null;
}
