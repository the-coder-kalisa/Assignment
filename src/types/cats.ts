import { Breed } from "./breed";

export interface Cat {
  url: string;
  id: string;
  breeds: Breed[];
}
