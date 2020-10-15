import React, { Component } from 'react';
import { Button, Space } from 'antd';
import './operation.less';
export interface OpeartionProps {
  title: string;
  renderTitle: Function; //  类似vue的具名插槽
  children: React.ReactNode;
}

export default (props: any) => {
  const { children } = props;
  return (
    <div className="operation-wrap">
      <Space size={'middle'}>
        {props.children}
        <Button>查询</Button>
      </Space>
    </div>
  );
};
