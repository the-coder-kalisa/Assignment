import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import type { FC } from "react";
import api from "../services/api";
import { useInfiniteQuery, useQuery } from "react-query";
import { Breed } from "../types/breed";
import { IContext } from "../types/context";
import { CartsImage } from "../types/cartsImages";

export const CatsBreedContext = createContext<IContext>({
  breeds: null,
  cats: null,
  setCurrentBreed: null,
  currentBreed: null,
  loadingBreeds: true,
  fetchNextPage: null,
  loadingCats: false,
  hasNextPage: false,
});

const CatsBreedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentBreed, setCurrentBreed] = useState<null | string>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const { data, isLoading } = useQuery("breeds", api.getBreeds, {
    refetchOnWindowFocus: false,
  });
  const {
    data: fetchedCatsData,
    fetchNextPage,
    isLoading: loadingCats,
  } = useInfiniteQuery(
    ["cats", currentBreed],
    async ({ pageParam = 1 }) => {
      let data = await api.getCatsByBreedAndPage(currentBreed!, pageParam);
      setHasNextPage(data.hasNextPage);
      return data;
    },
    {
      enabled: !!currentBreed,
      refetchOnWindowFocus: false,

      getNextPageParam: (lastPage, allPages) => {
        return lastPage.page + 1;
      },
    }
  );
  let cats = fetchedCatsData?.pages.map((page) => page.data);
  return (
    <CatsBreedContext.Provider
      value={{
        cats: cats?.flat(),
        currentBreed,
        breeds: data,
        loadingBreeds: isLoading,
        setCurrentBreed,
        fetchNextPage,
        hasNextPage,
        loadingCats,
      }}
    >
      {children}
    </CatsBreedContext.Provider>
  );
};

export default CatsBreedProvider;
