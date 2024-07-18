import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 55px;
  border: 0;
  padding: 0 16px;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: 500;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  &:disabled {
    opacity: .5;
  }
`;