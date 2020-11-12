import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Button, Input } from 'antd';
export default function() {
  const [nowTime, setNowTime] = useState(
    moment().format('YYYY年MM月DD日 ddd HH:mm'),
  );
  const inputEl = useRef(null);
  // useEffect可以写多个
  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(moment().format('YYYY年MM月DD日 ddd HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [nowTime]); //如果为空数，表示不监听任何状态，如果指定具体的状态，表示只监听该状态

  return (
    <>
      {nowTime}
      <Input type="text" ref={inputEl} />
      <Button
        type={'primary'}
        onClick={() => {
          console.log(inputEl.current);
        }}
      >
        获取Ref
      </Button>
    </>
  );
}
