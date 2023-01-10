import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import type { FC } from "react";
import api from "../services/api";
import { useQuery } from "react-query";
import { Breed } from "../types/breed";
import { IContext } from "../types/context";

export const CatsBreedContext = createContext<IContext>({
  breeds: null,
  
});

const CatsBreedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cats, setCats] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [currentBreed, setCurrentBreed] = useState<null | string>(null);
  const { data, error } = useQuery("breeds", api.getBreeds);
  return (
    <CatsBreedContext.Provider
      value={{
        // cats,
        // currentBreed,
        breeds: data,
        // page,
        // setPage,
        // setCurrentBreed,
        // setCats,
      }}
    >
      {children}
    </CatsBreedContext.Provider>
  );
};

export default CatsBreedProvider;
