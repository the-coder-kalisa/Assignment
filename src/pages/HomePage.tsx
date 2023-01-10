import { useContext, useEffect } from "react";
import { CatsBreedContext } from "../context/CatsBreed";

const HomePage = () => {
  const { breeds } = useContext(CatsBreedContext);
  useEffect(() => {
    console.log(breeds);
  },[breeds])
  return <div>home page</div>;
};
export default HomePage;
