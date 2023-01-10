import { Col, Select } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
const SelectBreed = () => {
  const { breeds, setCurrentBreed, currentBreed, loadingBreeds } =
    useContext(CatsBreedContext);

  return breeds ? (
    <Container>
      <Title>cat browser</Title>
      <span>Breed</span>
      <Select
      value={currentBreed}
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
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 25px;
  text-transform: capitalize;
  font-family: sans-serif;
`;
export default SelectBreed;
