import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    margin-bottom: 28px;
    padding-bottom: 16px;

    font-size: 20px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;