import styled from "styled-components";

export const CustomButton = styled.button`
  margin: 5px;
  font-size: 15px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
  color: ${({ primary }) => (primary ? "#fff" : "green")};
  border: ${({ primary }) => (primary ? "none" : "1px solid green")};
  width: ${({ width }) => (width ? width : "max-content")};
  background: ${({ primary }) => (primary ? "green" : "transparent")};

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;
