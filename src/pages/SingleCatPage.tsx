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
      setCurrentBreed!(data.breeds[0].name);
      setCat(data);
    };

    getCatData();
  }, []);
  return (
    <Card
      headStyle={{ background: "teal" }}
      style={{ width: 600 }}
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
      bodyStyle={{ padding: "0px 10px" }}
      cover={
        <img
          src={cat?.url}
          style={{ height: 400, objectFit: "cover", objectPosition: "top" }}
        />
      }
    >
      <h3>{cat?.breeds[0].name}</h3>
      <h5>Origin: {cat?.breeds[0].origin}</h5>
      <h6>{cat?.breeds[0].temperament}</h6>
      <div>{cat?.breeds[0].description}</div>
    </Card>
  );
};
const Name = styled.h4``;
export default SingleCatPage;
