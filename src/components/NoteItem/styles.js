import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  /* margin-bottom: 8px; */
  border-radius: 10px;
  padding-right: 16px;
  
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  > input {
    width: 100%;
    height: 55px;
    padding: 12px;
    border: none;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    border: none;
    background: none;
    /* color: ${({ theme, isNew }) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED}; */
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;