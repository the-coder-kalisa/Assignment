import { Breed } from "./breed";
import type { Dispatch } from "react";
import { CartsImage } from "./cartsImages";
export interface IContext {
  breeds: Breed[] | null | undefined;
  cats: CartsImage[] | null | undefined;
  currentBreed: string | null;
  loadingBreeds: boolean;
  setCurrentBreed: Dispatch<React.SetStateAction<string | null>> | null;
  fetchNextPage: Function | null;
  hasNextPage: boolean;
  loadingCats: boolean;
}
