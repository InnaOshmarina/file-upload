import React, { memo, useRef } from 'react';
import T from 'prop-types';

import api from '../../api';

const UploadForm = memo(props => {
  const { onUpdate } = props;
  const inputEl = useRef(null);

  const onSuccess = data => {
    onUpdate(data.link);
  };

  const onFailure = () => {
    onUpdate(null);
  };

  const onUpload = e => {
    e.preventDefault();
    // console.log(inputEl.current.files[0]);

    api(inputEl.current.files[0], onSuccess, onFailure);
  };

  return (
    <form onSubmit={onUpload}>
      <input ref={inputEl} type="file" />
      <button type="submit">Upload</button>
    </form>
  );
});

UploadForm.propTypes = {
  onUpdate: T.func.isRequired,
};

export default UploadForm;
