import type { FC } from "react";
import { CartsImage } from "../types/cartsImages";
import styled from "styled-components";
import { Card, Button, Col } from "antd";
import { useNavigate } from "react-router-dom";

const CatCard: FC<{ cat: CartsImage }> = ({ cat }) => {
  const navigate = useNavigate();
  return (
      <Card cover={<Image src={cat.url} />}>
        <Button
          type="primary"
          style={{ width: "100%" }}
          onClick={() => {
            navigate("/single-cat/" + cat.id);
          }}
        >
          View Details
        </Button>
      </Card>
  );
};

const Image = styled.img`
  height: 200px;
  object-fit: cover;
  object-position: top;
`;

export default CatCard;
