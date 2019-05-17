import React, { memo, useState } from 'react';

import List from './components/List';
import Status from './components/Status';
import UploadForm from './components/UploadForm';

import './App.css';

const App = memo(() => {
  const [paths, setPaths] = useState([]);
  const [status, setStatus] = useState('');

  const onUpdate = path => {
    if (path) {
      setStatus('OK');
      setPaths(paths.concat(path));
    } else {
      setStatus('Fail');
    }
  };

  return (
    <div>
      <UploadForm onUpdate={onUpdate} />
      <List data={paths} />
      <Status text={status} />
    </div>
  );
});

export default App;
