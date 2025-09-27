import { DateTime } from 'luxon';

function datetime(time, timezone = Time.default_timezone) {
  if (time === void 0) {
    return DateTime.now().setZone(timezone);
  } else if (typeof time === "number") {
    return DateTime.fromMillis(time).setZone(timezone);
  } else if (time instanceof Date) {
    return DateTime.fromJSDate(time).setZone(timezone);
  } else {
    return DateTime.fromJSDate(new Date(time)).setZone(timezone);
  }
}
function Time(time, timezone = Time.default_timezone) {
  return datetime(time, timezone).toFormat("yyyy/MM/dd-HH:mm:ss");
}
((Time2) => {
  Time2.default_timezone = "Asia/Shanghai";
  Time2.user_timezone = DateTime.local().zoneName;
  function weekday(date2, timezone = Time2.default_timezone) {
    return DateTime.fromJSDate(date2).setZone(timezone).weekday % 7;
  }
  Time2.weekday = weekday;
  function date(time2, timezone = Time2.default_timezone) {
    return datetime(time2, timezone).toFormat("yyyy/MM/dd");
  }
  Time2.date = date;
  ((date2) => {
    function locale2(time2, locale3 = navigator.language, timezone = Time2.default_timezone) {
      return datetime(time2, timezone).setLocale(locale3).toLocaleString(DateTime.DATE_MED);
    }
    date2.locale = locale2;
    function input(time2, timezone = Time2.default_timezone) {
      return datetime(time2, timezone).toFormat("yyyy-MM-dd");
    }
    date2.input = input;
  })(date = Time2.date || (Time2.date = {}));
  function time(time2, timezone = Time2.default_timezone) {
    return datetime(time2, timezone).toFormat("HH:mm:ss");
  }
  Time2.time = time;
  function full(time2, timezone = Time2.default_timezone) {
    return datetime(time2, timezone).toFormat("yyyy/MM/dd-HH:mm:ss 'UTC'ZZ");
  }
  Time2.full = full;
  function locale(time2, locale2 = navigator.language, timezone = Time2.default_timezone) {
    return datetime(time2, timezone).setLocale(locale2).toLocaleString(DateTime.DATETIME_MED);
  }
  Time2.locale = locale;
  function addDays(date2, days) {
    return DateTime.fromJSDate(date2).plus({ days }).toJSDate();
  }
  Time2.addDays = addDays;
  function subtractDays(date2, days) {
    return DateTime.fromJSDate(date2).minus({ days }).toJSDate();
  }
  Time2.subtractDays = subtractDays;
  function diffDays(date_1, date_2, timezone = Time2.default_timezone) {
    const day_1 = DateTime.fromJSDate(date_1).setZone(timezone).startOf("day");
    const day_2 = DateTime.fromJSDate(date_2).setZone(timezone).startOf("day");
    return Math.floor(day_1.diff(day_2, "days").days);
  }
  Time2.diffDays = diffDays;
})(Time || (Time = {}));
const Time$1 = Time;

export { Time$1 as T };
