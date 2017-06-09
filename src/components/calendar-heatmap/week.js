import React from 'react';
import moment from 'moment';

import Day from './day';

const Week = ({
  streakData = {},
  max = 10,
  month,
  startDate = '2017-06-28',
  color,
}) => {

  const getDayComponents = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const dayDate = moment(startDate).add(i, 'days');
      const postCount = streakData[dayDate.format('YYYY-MM-DD')] || Math.round(Math.random()*max-1); // TODO: change to fetch date depends of the props (favorites, sells, etc)
      const classNames = []; // TODO: put color class depend of the props
      let level = Math.ceil((postCount / max) * 4);

      if (
        dayDate.isBefore(moment(month).startOf('month')) ||
        dayDate.isAfter(moment(month).endOf('month'))
      ) {
        classNames.push('is-outside-month');
      } else if (dayDate.isAfter(moment().endOf('day'))) {
        classNames.push('is-after-today');
      } else if (level) {
        if (level > 4) {
          level = 4;
        }
        classNames.push('is-level-' + level);
      }
      classNames.push(color) // TODO: maybe here u can put the color prop
      days.push(
        <Day
          key={moment(dayDate.format('MMDD'))}
          classNames={ classNames.join(' ')}
          date={dayDate.format('DD/MM/YYYY')} // put the render option
          postCount={postCount}
        />
      )
    }
    return days;
  }

  return (
    <div className="cal-heatmap_week">
      {getDayComponents()}
    </div>
  );
}

export default Week;
