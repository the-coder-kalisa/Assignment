import { createContext, useState, ReactNode, useEffect } from "react";
import type { FC } from "react";
import api from "../services/api";
import { useInfiniteQuery, useQuery } from "react-query";
import { IContext } from "../types/context";

// create catsBreed context
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

// create catsbreed provider
const CatsBreedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentBreed, setCurrentBreed] = useState<null | string>(null);
  const [hasNextPage, setHasNextPage] = useState(false);

  // fetch breeds from api
  const {
    data,
    isLoading,
    isError: errorWhileFetchingBreeds,
  } = useQuery("breeds", api.getBreeds, {
    refetchOnWindowFocus: false,
  });

  // fetch cats according to currentBreed and page
  const {
    data: fetchedCatsData,
    fetchNextPage,
    isLoading: loadingCats,
    isError: errorWhileFetchingCats,
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

  // arrange cats for better preview
  let cats = fetchedCatsData?.pages.map((page) => page.data);

  // give error when there was error while fetching data
  useEffect(() => {
    if (errorWhileFetchingCats || errorWhileFetchingBreeds) {
      alert(
        "Apologies but we could not load new cats for you at this time! Miau!"
      );
    }
  }, [errorWhileFetchingCats, errorWhileFetchingBreeds]);
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
