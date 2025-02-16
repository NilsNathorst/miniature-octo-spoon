import { Activities } from "@/schema";
import {
  getOrderOfWeekdays,
  groupActivitiesByDay,
} from "../group-activities-by-day";

describe("Date Utility Functions", () => {
  describe("getOrderOfWeekdays", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("returns array of all weekdays", () => {
      const result = getOrderOfWeekdays();
      expect(result.length).toBe(7);
      expect(result).toEqual(
        expect.arrayContaining([
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ])
      );
    });

    it("orders days based on current day", () => {
      // Mock today as Wednesday
      jest.setSystemTime(new Date("2024-01-03").getTime());

      const expectedOrder = [
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
      ];

      expect(getOrderOfWeekdays()).toEqual(expectedOrder);
    });
  });

  describe("groupActivitiesByDay", () => {
    const mockActivities = [
      {
        name: "Morning Yoga",
        slots: { leftToBook: 5 },
        duration: { start: new Date("2024-01-01T09:00:00Z") },
        instructors: [{ name: "Sarah Johnson" }, { name: "Michael Brown" }],
        id: 1,
      },
      {
        name: "Evening Meditation",
        slots: { leftToBook: 8 },
        duration: { start: new Date("2024-01-01T18:00:00Z") },
        id: 2,
      },
      {
        name: "Advanced Pilates",
        slots: { leftToBook: 3 },
        duration: { start: new Date("2024-01-02T10:00:00Z") },
        instructors: [{ name: "Emma Wilson" }],
        id: 3,
      },
    ] as Activities;

    it("groups activities correctly by weekday", () => {
      const grouped = groupActivitiesByDay(mockActivities);
      expect(grouped.Monday).toHaveLength(2); // Two activities on Monday
      expect(grouped.Tuesday).toHaveLength(1); // One activity on Tuesday
      expect(Object.keys(grouped)).toHaveLength(7); // All weekdays present
    });

    it("handles empty input gracefully", () => {
      const grouped = groupActivitiesByDay([] as Activities);
      expect(Object.keys(grouped)).toHaveLength(7);
      Object.values(grouped).forEach((dayArray) => {
        expect(Array.isArray(dayArray)).toBe(true);
        expect(dayArray).toHaveLength(0);
      });
    });

    it("maintains original activity structure", () => {
      const grouped = groupActivitiesByDay(mockActivities);
      const mondayActivity = grouped.Monday[0];
      expect(mondayActivity.id).toBe(1);
      expect(mondayActivity.duration.start).toBeDefined();
    });
  });
});
