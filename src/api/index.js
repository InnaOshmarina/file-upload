export default (file, onSuccess, onFailure) => {
  const DATA = new FormData();
  DATA.append('file', file);

  window
    .fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      mode: 'cors',
      body: DATA,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    })
    .then(data => onSuccess(data))
    .catch(error => {
      onFailure();
    });
};
