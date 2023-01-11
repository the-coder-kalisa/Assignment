import { Skeleton } from "antd";
import styled from "styled-components";

export default function CatsComponentSkeleton() {
  const sampleSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SkeletonContainer>
      {sampleSkeletons.map((_, index) => (
        <SingleSkeletonContainer key={index}>
          <Skeleton.Image
            active
            style={{ width: "100%", minHeight: 150 }}
          ></Skeleton.Image>
          <Skeleton.Button
            style={{ width: "90%", margin: "15px 15px" }}
          ></Skeleton.Button>
        </SingleSkeletonContainer>
      ))}
    </SkeletonContainer>
  );
}
const SingleSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  gap: 5px;
  border-radius: 5px;
`;
export const SkeletonContainer = styled.div`
  display: grid;
  width: 100%;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
