import React from 'react';
import {history} from 'umi'

import {Button} from 'antd'


export default (props) => {
  return (
    <div>
      <h1>page3</h1>
      <Button onClick={()=>props.history.push('/navone/page1')}>Go to list page</Button>
    </div>
  );
}
