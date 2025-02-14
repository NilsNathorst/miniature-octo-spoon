"use client";

import { getOrderOfWeekdays, groupActivitiesByDay } from "../app/utils";
import { Activities } from "@/schema";
import { ActivityCard } from "./activity-card";
import { Typography } from "./typography";
import styled from "styled-components";

interface ActivityListProps {
  activities: Activities;
}

export const ActivityInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ActivityListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;

export const ActivityList = ({ activities }: ActivityListProps) => {
  const weekDays = getOrderOfWeekdays();
  const grouped = groupActivitiesByDay(activities);

  return (
    <ActivityListContainer>
      {weekDays.map((weekDay, i) => {
        let title = weekDay;
        if (i === 0) title = "Today";
        if (i === 1) title = "Tomorrow";

        if (grouped[weekDay].length === 0) return null;

        return (
          <div key={title}>
            <Typography variant="h2">{title}</Typography>
            <ActivityInnerWrapper>
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
                  <ActivityCard
                    key={id}
                    name={name}
                    slots={slots}
                    startTime={startTime}
                    instructor={instructor}
                  />
                );
              })}
            </ActivityInnerWrapper>
          </div>
        );
      })}
    </ActivityListContainer>
  );
};
