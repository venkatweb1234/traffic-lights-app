import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ColorDiv = styled.div`
  flex: 1;
  margin: 3%;
  border-radius: 50%;
  &:before {
    content: "";
    display: inline-block;
    padding-top: 100%;
  }
  background: ${(props) => props.color};
`;

export const DirectionDiv = styled.div`
  text-align: center;
  font-weight: 700;
`;
export const HeadH1 = styled.h1`
  text-align: center;
`;

export const ChildDiv = styled.div`
  width: 25rem;
  text-align: center;
`;
