import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledBlock from './styledBlock';

function Block(props) {
  return (
    <StyledBlock {...props}>{Children.toArray(props.children)}</StyledBlock>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  warning: PropTypes.bool,
};

export default Block;
