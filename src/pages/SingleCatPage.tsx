import { Button, Card, Skeleton } from "antd";
import { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import SingleCatPageSkeleton from "../components/Skeletons/SingleCatPageSkeleton";
import { CatsBreedContext } from "../context/CatsBreed";
import api from "../services/api";
import NotFoundPage from "./NotFoundPage";

const SingleCatPage = () => {
  const navigate = useNavigate();
  // get id from url (:id)
  const { id } = useParams();
  const { setCurrentBreed } = useContext(CatsBreedContext);

  // get single cat data using id from api
  const {
    data: cat,
    isLoading,
    isFetching,
  } = useQuery(
    ["single-cat", id],
    async () => {
      let data = await api.getSingleCatByID(id!);
      setCurrentBreed!(data.breeds[0].id);
      return data;
    },
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  // render both sekeletons, and cat data according to isLoading , isFetching
  return isLoading || isFetching ? (
    <SingleCatPageSkeleton />
  ) : !cat?.breeds ? (
    <NotFoundPage />
  ) : (
    <Card
      headStyle={{
        background: "#f7f7f7",
        padding: "7px 13px",
        minHeight: "fit-content",
      }}
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

// styles
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
