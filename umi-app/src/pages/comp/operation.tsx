import React, { Component } from 'react';
import { Button } from 'antd';
import './operation.less';
export interface OpeartionProps {
  title: string;
  renderTitle: Function; //  类似vue的具名插槽
  children: React.ReactNode;
}

export default (props: CardProps) => {
  const { children } = props;
  return (
    <div className="operation-wrap">
      {props.children}
      <Button>查询</Button>
    </div>
  );
};
