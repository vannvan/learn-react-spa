import React from 'react';
import { history } from 'umi';
import { Link } from 'umi';

const loadPage = (link: String) => {
  history.push(link);
};
export default () => {
  return (
    <div>
      <h1>page1</h1>
      <button
        onClick={() => {
          loadPage('/navone/page2?a=1');
        }}
      >
        跳转page2
      </button>
      <Link to="/navone/page3">Users Page link组件</Link>
    </div>
  );
};
