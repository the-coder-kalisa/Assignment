import styled from "styled-components";
import { Skeleton } from "antd";

const SingleCatPageSkeleton = () => {
  return (
    <SkeletonContainer>
      <Skeleton.Button active></Skeleton.Button>
      <Skeleton.Image
        active
        style={{ width: "100%", minHeight: 400 }}
      ></Skeleton.Image>
      <Skeleton
        paragraph={{ width: [150, 250, 200, "100%", "100%"], rows: 5 }}
        title={{ width: 100 }}
      ></Skeleton>
    </SkeletonContainer>
  );
};
const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  border: 1px solid #ddd;
  margin: 5px;
  gap: 5px;
  padding: 5px;
`;
export default SingleCatPageSkeleton;
