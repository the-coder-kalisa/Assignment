import { Select } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
const SelectBreed = () => {
  const { breeds, setCurrentBreed, currentBreed } =
    useContext(CatsBreedContext);

  return breeds ? (
    <Container>
      <Title>cat browser</Title>
      <Select
        onChange={(value: string) => {
          setCurrentBreed!(value);
        }}
        placeholder="Select breed"
        style={{ width: 200 }}
        options={breeds.map((breed) => ({
          label: breed.name,
          value: breed.id,
        }))}
      />
    </Container>
  ) : (
    <div></div>
  );
};
const Container = styled.div`
  padding: 20px 10px;
`;
const Title = styled.h3`
  font-size: 20;
  text-transform: capitalize;
  font-family: sans-serif;
`;
export default SelectBreed;
