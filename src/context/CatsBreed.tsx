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
  page: 1,
  setPage: null,
  loadingBreeds: true,
  fetchNextPage: null,
});

const CatsBreedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  var [page, setPage] = useState<number>(1);
  const [currentBreed, setCurrentBreed] = useState<null | string>(null);
  const { data, isLoading } = useQuery("breeds", api.getBreeds, {
    refetchOnWindowFocus: false,
  });
  const {
    data: fetchedCats,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["cats", currentBreed],
    async ({ pageParam = 1 }) => {
      let data = await api.getCatsByBreedAndPage(currentBreed!, pageParam);
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
  useEffect(() => {
    console.log(fetchedCats?.pages);
  }, [fetchedCats]);
  let c = fetchedCats?.pages.map((page) => page.data);
  return (
    <CatsBreedContext.Provider
      value={{
        cats: c?.flat(),
        currentBreed,
        breeds: data,
        page,
        loadingBreeds: isLoading,
        setPage,
        setCurrentBreed,
        fetchNextPage,
      }}
    >
      {children}
    </CatsBreedContext.Provider>
  );
};

export default CatsBreedProvider;
