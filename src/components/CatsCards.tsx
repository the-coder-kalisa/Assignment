import { Row, Skeleton } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
import CatCard from "./CatCard";

const CatsCards = () => {
  const { cats, loadingCats } = useContext(CatsBreedContext);
  const sampleSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return !cats && !loadingCats ? (
    <div>No Cats Available</div>
  ) : loadingCats ? (
    <SkeletonContainer>
      {sampleSkeletons.map((_, index) => (
        <SingleSkeletonContainer key={index}>
          <Skeleton.Image
            active
            style={{ width: "100%", minHeight: 150 }}
          ></Skeleton.Image>
          <Skeleton.Button
            style={{ width: "90%", margin: "15px 15px" }}
          ></Skeleton.Button>
        </SingleSkeletonContainer>
      ))}
    </SkeletonContainer>
  ) : (
    <SkeletonContainer>
      {cats?.map((cat, index) => (
        <CatCard cat={cat} key={index} />
      ))}
    </SkeletonContainer>
  );
};
const SingleSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  gap: 5px;
  border-radius: 5px;
`;
const SkeletonContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
export default CatsCards;
