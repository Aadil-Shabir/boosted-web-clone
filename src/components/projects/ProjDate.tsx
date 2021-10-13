import React from 'react';
import {Typography} from '@material-ui/core';

const ProjDate: React.FC = () => {
  const date = new Date();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isToday = (date: any) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return date.getDate() == today.getDate()
      ? 'Today'
      : date.getDate() == yesterday.getDate()
      ? 'Yesterday'
      : date
          .toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })
          .split(' ')
          .join(' ');
  };

  const myDate = isToday(date);

  return <Typography variant="h4">{myDate}</Typography>;
};

export default ProjDate;
