import { useContext, useEffect } from "react";
import SelectBreed from "../components/SelectBreed";
import { CatsBreedContext } from "../context/CatsBreed";

const HomePage = () => {

  return (
    <div>
      <SelectBreed />
      
    </div>
  );
};
export default HomePage;
