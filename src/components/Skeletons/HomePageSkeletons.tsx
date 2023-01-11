import { Skeleton } from "antd";
import styled from "styled-components";

// create skeletons for home page 
export default function HomePageSkeletons() {
  return (
    <SkeletonContainer>
      <Skeleton.Input active></Skeleton.Input>
      <Skeleton
        paragraph={{ rows: 1, width: [100] }}
        active
        title={false}
      ></Skeleton>
      <Skeleton.Input active></Skeleton.Input>
      <Skeleton.Button active></Skeleton.Button>
    </SkeletonContainer>
  );
}
const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
