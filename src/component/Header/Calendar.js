import React from 'react'

const Calendar = () => {
  var locale = "en-us";
  var today = new Date();
  var dd = today.getDate();
  var monthName = today.toLocaleString(locale, { month: "short" });

  // add leading zeros
  if (dd < 10) {
      dd = '0' + dd;
  }


  return (
      <div className="calendar-box mr-4">
          <span className="top">
              {monthName}
          </span>
          <span className="bottom">{dd}</span>
      </div>
  )
}

export default Calendar