import React, { useState, useEffect } from 'react';
import moment from 'moment';
export default function() {
  const [nowTime, setNowTime] = useState(
    moment().format('YYYY年MM月DD日 ddd HH:mm'),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(moment().format('YYYY年MM月DD日 ddd HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [nowTime]);

  return <>{nowTime}</>;
}
