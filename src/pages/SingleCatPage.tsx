import { Button, Card } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { CatsBreedContext } from "../context/CatsBreed";
import api from "../services/api";
import { Cat } from "../types/cats";

const SingleCatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setCurrentBreed } = useContext(CatsBreedContext);
  const [cat, setCat] = useState<Cat | null>(null);
  useEffect(() => {
    const getCatData = async () => {
      const data = await api.getSingleCatByID(id!);
      console.log(data);
      setCurrentBreed!(data.breeds[0].id);
      setCat(data);
    };

    getCatData();
  }, []);
  return (
    <Card
      headStyle={{ background: "#f7f7f7", padding: "7px 13px", minHeight: "fit-content" }}
      style={{ maxWidth: 600, margin: 10 }}
      bodyStyle={{ padding: 0 }}
      title={
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      }
    >
      <Image src={cat?.url} />
      <BreedDataContainer>
        <h3>{cat?.breeds[0].name}</h3>
        <h5>{`Origin: ${cat?.breeds[0].origin}`}</h5>
        <h6>{cat?.breeds[0].temperament}</h6>
        <div>{cat?.breeds[0].description}</div>
      </BreedDataContainer>
    </Card>
  );
};
const BreedDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
`;
const Image = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;
const Name = styled.h4``;
export default SingleCatPage;
