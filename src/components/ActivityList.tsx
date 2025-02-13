import { getOrderOfWeekdays, groupActivitiesByDay } from "../app/utils";
import { Card } from "./Card";
import { Typography } from "./Typography";

interface ActivityListProps {
  activities: any[];
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  if (activities.length === 0)
    return (
      <div>
        Unfortunately there are no instructor-led classes the coming week.
      </div>
    );

  const weekDays = getOrderOfWeekdays();
  const grouped = groupActivitiesByDay(activities);

  return weekDays.map((weekDay, i) => {
    let title = weekDay;
    if (i === 0) title = "Today";
    if (i === 1) title = "Tomorrow";

    return (
      <div>
        <Typography variant="h2">{title}</Typography>
        <div>
          {grouped[weekDay].map((activity) => {
            const { name, id } = activity;
            const slots = activity.slots.leftToBook;
            const date = new Date(activity.duration.start);

            const instructor = activity.instructors?.[0]?.name || "-";

            const startTime = date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <Card
                key={id}
                name={name}
                slots={slots}
                startTime={startTime}
                instructor={instructor}
              />
            );
          })}
        </div>
      </div>
    );
  });
};
