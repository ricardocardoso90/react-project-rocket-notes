import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 16px;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  border: none;
  resize: none;
  /* margin-bottom: 8px; */
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;