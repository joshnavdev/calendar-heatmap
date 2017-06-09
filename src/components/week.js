import React from 'react';
import  moment from 'moment';

const Week = ({
  streakData = {},
  max = 10,
  month,
  startDate,
  userLocale,
}) => {

  const getDayComponents = () => {
    const days = [];
    for(let i = 0; i < 7; i++) {
      const dayDate = moment(startDate).locale('en').add(1,'days');
      const postCount = streakData[dayDate.format('YYYY-MM-DD')] || 0; // TODO: change to fetch date depends of the props (favorites, sells, etc)
      const classNames = []; // TODO: put color class depend of the props
    }
  }

  return (
    <div>

    </div>
  );
}

export default Week;
