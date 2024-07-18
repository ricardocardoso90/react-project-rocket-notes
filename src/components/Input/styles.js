import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  
  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
      margin-left: 16px;
    }
`;