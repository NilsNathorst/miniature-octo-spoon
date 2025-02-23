export const addWeek = (date: Date) =>
  new Date(date.setUTCDate(date.getUTCDate() + 1 * 6)).toISOString();

export const getStartAndEndDate = () => {
  const date = new Date();

  const startDate = encodeURIComponent(date.toISOString());
  const endDate = addWeek(date);

  return { startDate, endDate };
};
