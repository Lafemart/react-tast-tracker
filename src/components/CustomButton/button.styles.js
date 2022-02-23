import styled from "styled-components";

export const CustomButton = styled.button`
  margin: 5px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
  padding: ${({ round }) => (round ? "20px" : "10px 20px")};
  border-radius: ${({ round }) => (round ? "100%" : "5px")};
  color: ${({ primary, otherColors }) =>
    primary || otherColors ? "#fff" : "green"};
  width: ${({ width }) => (width ? width : "max-content")};
  border: ${({ primary, otherColors }) =>
    primary || otherColors ? "none" : "1px solid green"};
  background: ${({ primary, otherColors }) =>
    primary ? "green" : otherColors ? otherColors : "transparent"};

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;
