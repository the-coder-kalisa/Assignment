import { useContext, useEffect } from "react";
import styled from "styled-components";
import CatsCards from "../components/CatsCards";
import SelectBreed from "../components/SelectBreed";
import { CatsBreedContext } from "../context/CatsBreed";

const HomePage = () => {
  return (
    <Container>
      <SelectBreed />
      <CatsCards />
    </Container>
  );
};
const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 70rem;
`;
export default HomePage;
