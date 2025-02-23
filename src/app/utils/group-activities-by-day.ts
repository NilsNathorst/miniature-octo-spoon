import { Activities } from "@/schema";

export const getOrderOfWeekdays = () => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = new Date().getUTCDay();
  const offset = [...weekDays.slice(day - 1), ...weekDays.slice(0, day - 1)];

  return offset;
};

export const groupActivitiesByDay = (activities: Activities) => {
  return activities.reduce(
    (acc, curr) => {
      const { start } = curr.duration;
      const date = new Date(start);
      const weekday = date.toLocaleString("en-US", {
        weekday: "long",
      });

      if (acc[weekday]?.length > 0) {
        acc[weekday].push(curr);
        return acc;
      }

      return {
        ...acc,
        [weekday]: [curr],
      };
    },
    {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    } as { [key: string]: Activities }
  );
};
