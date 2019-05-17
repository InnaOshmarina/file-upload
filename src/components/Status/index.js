import React, { memo } from 'react';
import T from 'prop-types';

const Status = memo(props => {
  const { text } = props;
  return <p>STATUS: {text}</p>;
});

Status.propTypes = {
  text: T.string.isRequired,
};

export default Status;
