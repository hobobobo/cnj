import styled from 'styled-components';

const StyledBlock = styled.div`
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  padding: 12px 16px;
  margin: 16px;
  font-size: 14px;
  line-height: 1.25rem;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #000;
  background-color: #fff;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  ${props => props.warning && 'background-color: #dc3545; color: #fff'}
`;

export default StyledBlock;
