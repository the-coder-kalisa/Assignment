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
import { CartsImages } from "../types/cartsImages";

export const CatsBreedContext = createContext<IContext>({
  breeds: null,
  cats: null,
  setCurrentBreed: null,
  currentBreed: null,
  page: 1,
  setPage: null,
  setCats: null,
  loadingBreeds: true
});

const CatsBreedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cats, setCats] = useState<CartsImages[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [currentBreed, setCurrentBreed] = useState<null | string>(null);
  const { data, error, isLoading } = useQuery(["breeds"], api.getBreeds);
  useEffect(() => {
    const getData = async () => {
      const data = await api.getCatsByBreedAndPage(currentBreed!, page);
      console.log(data);
    };
    if (currentBreed) {
      getData();
    }
  }, [currentBreed]);
  return (
    <CatsBreedContext.Provider
      value={{
        cats,
        currentBreed,
        breeds: data,
        page,
        loadingBreeds: isLoading,
        setPage,
        setCurrentBreed,
        setCats,
      }}
    >
      {children}
    </CatsBreedContext.Provider>
  );
};

export default CatsBreedProvider;
