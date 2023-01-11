import type { FC } from "react";
import { CatImageData } from "../types/cartsImages";
import styled from "styled-components";
import { Card, Button, Col } from "antd";
import { useNavigate } from "react-router-dom";

const CatCard: FC<{ cat: CatImageData }> = ({ cat }) => {
  // initialize navigate
  const navigate = useNavigate();

  return (
    <Card cover={<Image src={cat.url} />}>
      <Button
        type="primary"
        style={{ width: "100%" }}
        onClick={() => {
          // naviaget to single-cat/id
          navigate("/single-cat/" + cat.id);
        }}
      >
        View Details
      </Button>
    </Card>
  );
};
// styles
const Image = styled.img`
  height: 200px;
  object-fit: cover;
  object-position: top;
`;

export default CatCard;
