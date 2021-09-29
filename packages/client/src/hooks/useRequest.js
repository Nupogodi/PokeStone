// create instance for api (back-end) and for pokemon-api (front-end)
// create config with endpoints for both instances
// create a hook :
//const res = axios.get('pokemon')
// const res = useRequest({endoint: 'pokemon', ...})

// conect front with back end\
import { useState, useEffect } from 'react';
import axios from 'axios';

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

// import { useState } from 'react';
// import axios from 'axios';

// /**
//  @description - Простой Hook, который делает запрос к серверу и прогоняет данные через функцию-модификатор
//  (если передана)
//  @params [string] url - URL, по которому будет сделан запрос
//  @params [object] config - Параметры запроса
//  @params [function] config.mapper - Функция-модификатор
//  @params [string] config.method - get, post, ...
// export const useFetchData = (url, config = {}) => {
//   const [result, updateData] = useState(null);
//   const {
//     body,
//     method = 'get',
//     mapper = (a) => a,
//     onReject = () => {},
//   } = config;

//   useState(() => {
//     axios[method](url, body)
//       .then((resp) => {
//         updateData(mapper(resp.data));
//       })
//       .catch(onReject);
//   });

//   return result;
// };

export default useRequest;
