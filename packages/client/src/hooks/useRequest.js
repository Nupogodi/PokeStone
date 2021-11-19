import { useState } from 'react';

const useRequest = ({ instance, url, config = {} }) => {
  const [result, updateData] = useState(null);
  const {
    body,
    method = 'get',
    mapper = (a) => a,
    onReject = () => {},
  } = config;

  useState(() => {
    instance[method](url, body)
      .then((resp) => {
        updateData(mapper(resp.data));
      })
      .catch(onReject);
  });

  return result;
};

export default useRequest;
