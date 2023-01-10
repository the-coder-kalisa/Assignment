import { useContext, useEffect } from "react";
import { CatsBreedContext } from "../context/CatsBreed";
import api from "../services/api";

const HomePage = () => {
  useEffect(() => {
    const getBreeds = async () => {
        const breeds = await api.getBreeds();
        console.log(breeds);
    }
    getBreeds();
  }, []);
  return <div>home page</div>;
};
export default HomePage;
