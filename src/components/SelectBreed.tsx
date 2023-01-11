import { Col, Select } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
const SelectBreed = () => {
  // get context values from catsBreedContext
  const { breeds, setCurrentBreed, currentBreed } =
    useContext(CatsBreedContext);

  // render data according to the breeds availability
  return breeds ? (
    <Container>
      <Title>cat browser</Title>
      <Selection>
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
      </Selection>
    </Container>
  ) : (
    <div></div>
  );
};

// styles
const Selection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Title = styled.h3`
  font-size: 25px;
  text-transform: capitalize;
`;
export default SelectBreed;
