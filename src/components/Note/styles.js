import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;