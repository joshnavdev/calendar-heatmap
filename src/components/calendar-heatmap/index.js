import React from 'react';
import moment from 'moment';

import Month from './month.js';

const keyDayStyle = {
  width: 20,
  height: 20,
};

const CalendarHeatMap = ({
  streakData = {},
  max = 20,
  color = 'green',
}) => {
  const getMonthComponents = () => {
    const months = [];
    for (let i = 11; i >= 0; i--) {
      const startDate = moment().subtract(i, 'month').startOf('month');
      months.push(
        <Month
          key={startDate.format('YYYYMM')}
          startDate={startDate}
          streakData={streakData}
          max={max}
          color={color}
        />
      );
    }
    return months;
  }
  return (
    <div className="cal-heatmap">
      <div className="cal-heatmap_year">
        {getMonthComponents()}
      </div>
      <div className="cal-heatmap_container">
        {/* TODO: Use prop to put message*/}
        <span className="cal-heatmap_label">{'Fewer'}</span>
        <div className="cal-heatmap_day-showers">
          <div style={keyDayStyle} className="cal-heatmap_day" />
          <div style={keyDayStyle} className={`cal-heatmap_day is-level-1 ${color}`} />
          <div style={keyDayStyle} className={`cal-heatmap_day is-level-2 ${color}`} />
          <div style={keyDayStyle} className={`cal-heatmap_day is-level-3 ${color}`} />
          <div style={keyDayStyle} className={`cal-heatmap_day is-level-4 ${color}`} />
        </div>
        <span className="cal-heatmap_label">{'More'}</span>
      </div>
    </div>
  );
};

export default CalendarHeatMap;
