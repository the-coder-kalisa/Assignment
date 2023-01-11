import { Skeleton } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
import CatCard from "./CatCard";
import CatsComponentSkeleton, {
  SkeletonContainer,
} from "./Skeletons/CatsComponentSkeleton";

const CatsCards = () => {
  // get contextValues from catsbreedContext
  const { cats, loadingCats } = useContext(CatsBreedContext);

  // create sample skeleton values to use during loading to help in mapping

  // render cats data according to loading and their availability
  return !cats && !loadingCats ? (
    <div>No Cats Available</div>
  ) : loadingCats ? (
    <CatsComponentSkeleton />
  ) : (
    <SkeletonContainer>
      {cats?.map((cat, index) => (
        <CatCard cat={cat} key={index} />
      ))}
    </SkeletonContainer>
  );
};

// styles

export default CatsCards;
