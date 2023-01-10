import { Row } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
import CatCard from "./CatCard";

const CatsCards = () => {
  const { cats } = useContext(CatsBreedContext);
  return !cats ? (
    <div>No Cats Available</div>
  ) : (
    <Row gutter={{xs: 4, sm: 8, md: 12, lg: 16}}>
      {cats.map((cat, index) => (
        <CatCard cat={cat} key={index} />
      ))}
    </Row>
  );
};



export default CatsCards;
