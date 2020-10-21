import React from 'react';

import { useHistory, useLocation, useParams } from 'umi';

export default () => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  console.log('useLocation', location);
  console.log('useHistory', history);
  console.log('useParams', params);

  return <span>aaaa</span>;
};
