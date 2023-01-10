import { useContext } from "react";
import { CatsBreedContext } from "../context/CatsBreed";

const CatsCards = () => {
  const { cats } = useContext(CatsBreedContext);
  return <div></div>;
};
export default CatsCards;
