import * as strings from '../constants/strings';

/**
 * Returns a full string with the current date information
 * @returns {string}
 */
export function getFullCurrentTime(time) {
  let date = time ? new Date(time) : new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentHours < 10) {
    currentHours = '0' + currentHours;
  }

  if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes;
  }

  return currentHours + ' : ' + currentMinutes;
}

/**
 * Returns a full string with the current date information
 * @returns {string}
 */
export function getFullCurrentDay(_date) {
  let date = _date ? new Date(_date) : new Date();

  return (
    getMonth(date.getMonth()) + ' ' + date.getDate() + ' ' + date.getFullYear()
  );
}

/**
 * Returns a full string with the current date information
 * @returns {string}
 */
export function getDayTime(_date) {
  let date = _date ? new Date(_date) : new Date();

  return {
    month: getMonth(date.getMonth()),
    day: date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate(),
    time:
      date.toLocaleTimeString('en-US').toString().slice(0, -6) +
      ' ' +
      date.toLocaleTimeString('en-US').toString().slice(7, 10),
  };
}

/**
 * Returns an object with all data to render the horizontal calendar
 * @param daysBefore
 * @param daysAfter
 * @returns {[]}
 */
export function getHorizontalCalendarData(calendarRange) {
  let array = [];
  for (var i = -calendarRange; i < calendarRange; i++) {
    array.push(getNewDate(getDateOffset(i), i));
  }
  return array;
}

/**
 * Returns a date before or after today based on the offset parameter
 * @param offset
 * @returns {Date}
 */
function getDateOffset(offset: number): Date {
  let date = new Date();
  date.setDate(date.getDate() + offset);
  return date;
}

export function getDaysBetween(dateOffset: string): number {
  let differenceInTime = new Date(dateOffset).getTime() - new Date().getTime();
  return Math.round(differenceInTime / (1000 * 3600 * 24));
}

/**
 * Returns a structured object item
 * @param currentDate
 * @returns {{weekDay: string, dayNumber: number}}
 */
function getNewDate(currentDate: Date, key: number): Object {
  return {
    weekDay: getWeekDay(currentDate.getDay(), false),
    dayNumber: currentDate.getDate(),
    key: key,
  };
}

/**
 * Returns a string with the full week day name
 * @param weekDay
 * @returns {string}
 */
function getWeekDay(weekDay: number, isLong: boolean): string {
  let _return = '';

  switch (weekDay) {
    case 0:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_0
        : strings.HORIZONTAL_CALENDAR.DAY_0;
      break;
    case 1:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_1
        : strings.HORIZONTAL_CALENDAR.DAY_1;
      break;
    case 2:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_2
        : strings.HORIZONTAL_CALENDAR.DAY_2;
      break;
    case 3:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_3
        : strings.HORIZONTAL_CALENDAR.DAY_3;
      break;
    case 4:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_4
        : strings.HORIZONTAL_CALENDAR.DAY_4;
      break;
    case 5:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_5
        : strings.HORIZONTAL_CALENDAR.DAY_5;
      break;
    case 6:
      _return = isLong
        ? strings.HORIZONTAL_CALENDAR.DAY_LONG_6
        : strings.HORIZONTAL_CALENDAR.DAY_6;
      break;
  }

  return _return;
}

/**
 * Returns a string with the full month name
 * @param month
 * @returns {string}
 */
function getMonth(month) {
  let _return = '';

  switch (month) {
    case 0:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_0;
      break;
    case 1:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_1;
      break;
    case 2:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_2;
      break;
    case 3:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_3;
      break;
    case 4:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_4;
      break;
    case 5:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_5;
      break;
    case 6:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_6;
      break;
    case 7:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_7;
      break;
    case 8:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_8;
      break;
    case 9:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_9;
      break;
    case 10:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_10;
      break;
    case 11:
      _return = strings.HORIZONTAL_CALENDAR.MONTH_11;
      break;
  }
  return _return;
}
