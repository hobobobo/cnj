import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  padding: 12px 16px;
  width: 240px;
  margin: 16px;
  font-size: 14px;
  line-height: 1.25rem;
  border-radius: 8px;
  border: 2px solid transparent;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #41addd;
  font-weight: bold;
  font-family: Roboto;
  text-transform: uppercase;
  background-color: #aafeeb;
  position: relative;
  &:hover {
    background-color: transparent;
    border: 2px solid #aafeeb;
  }
  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
