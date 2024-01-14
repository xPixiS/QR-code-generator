function calculateDaysBetweenDates(begin, end) {
  const millisecondsPerDay = 86400000;
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const difference = Math.round(
    (endDate.getTime() - beginDate.getTime()) / millisecondsPerDay
  );
  return difference;
}