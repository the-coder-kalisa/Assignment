import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import type { FC } from "react";
import api from "../services/api";
export const CatsBreedContext = createContext({});

const CatsBreedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cats, setCats] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [currentBreed, setCurrentBreed] = useState<null | string>(null);

  return (
    <CatsBreedContext.Provider
      value={{
        cats,
        currentBreed,
        page,
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
