import { Button, Skeleton } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import CatsCards from "../components/CatsCards";
import HomePageSkeletons from "../components/Skeletons/HomePageSkeletons";
import SelectBreed from "../components/SelectBreed";
import { CatsBreedContext } from "../context/CatsBreed";

const HomePage = () => {
  // get dat from context (Cats Breed context)
  const { cats, fetchNextPage, hasNextPage, loadingBreeds } =
    useContext(CatsBreedContext);

  return (
    <Container>
      {loadingBreeds ? (
        <HomePageSkeletons />
      ) : (
        <>
          <SelectBreed />
          <CatsCards />
          <Button
            type="primary"
            style={{ background: "#20ab20", color: "white" }}
            onClick={() => {
              fetchNextPage!();
            }}
            disabled={
              cats!?.length === 0 || !cats || !cats.length || !hasNextPage
            }
          >
            Load more
          </Button>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: start;
  max-width: 70rem;
`;
export default HomePage;
