import React from 'react';
import moment from 'moment';

import Week from './week';

const Month = ({
  streakData = {},
  max = 20,
  startDate = '2017-06-01',
  color,
}) => {

  const getWeekComponents = () => {
    const monthStart = moment(startDate);
    const monthEnd = moment(monthStart).endOf('month');
    const weekStart = moment(monthStart).startOf('week');
    const weeks = [];

    if (0 === monthStart.day()) {
      weekStart.subtract(6, 'day');
    } else {
      weekStart.add(1, 'day');
    }

    do {
      weeks.push(
        <Week
          key={weekStart.format('YYYYMMDD')}
          startDate={ moment(weekStart)}
          month={monthStart}
          streakData={streakData}
          max={max}
          color={color}
        />
      );
      weekStart.add(1,'week');
    } while (weekStart.isBefore(monthEnd, 'day') || weekStart.isSame(monthEnd, 'day'));
    return weeks;
  }

  return (
    <div className="cal-heatmap_month">
      <div>{getWeekComponents()}</div>
      <div className="cal-heatmap_label">{startDate.format('MMM')}</div>
    </div>
  );
}

export default Month;
