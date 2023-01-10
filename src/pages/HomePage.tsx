import { Button } from "antd";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import CatsCards from "../components/CatsCards";
import SelectBreed from "../components/SelectBreed";
import { CatsBreedContext } from "../context/CatsBreed";

const HomePage = () => {
    const {cats} = useContext(CatsBreedContext);
  return (
    <Container>
      <SelectBreed />
      <CatsCards />
      <Button type="primary" danger disabled={cats!?.length === 0 || cats === null}>Load more</Button>
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
