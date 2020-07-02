export function getDateFromTo(dayNumber: number, isBefore = true): any {
  let result = null;
  dayNumber = dayNumber - 1;

  let dateTo = new Date(new Date().toDateString()).getTime() / 1000;
  const timeStampDay = 24 * 60 * 60;
  let dateFrom = dateTo - dayNumber * timeStampDay;

  if (isBefore === false) {
    dateFrom = new Date(new Date().toDateString()).getTime() / 1000;
    dateTo = dateTo + dayNumber * timeStampDay;
  }

  result = {
    from: dateFrom,
    to: dateTo + 24 * 3600 - 1
  };
  return result;
}
