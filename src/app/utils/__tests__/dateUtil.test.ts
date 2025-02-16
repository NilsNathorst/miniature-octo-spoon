import { addWeek, getStartAndEndDate } from "../dateUtil";

describe("Date Utility Functions", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("addWeek", () => {
    test("adds exactly 6 days to the input date", () => {
      // Mock today as January 1st, 2024
      jest.setSystemTime(new Date("2024-01-01").getTime());

      const date = new Date();
      const result = new Date(addWeek(date));

      expect(result.getUTCDate()).toBe(7); // January 7th
      expect(result.getUTCMonth()).toBe(0); // January
      expect(result.getUTCFullYear()).toBe(2024);
    });

    test("handles month rollover correctly", () => {
      // Mock December 25th, 2024
      jest.setSystemTime(new Date("2024-12-25").getTime());

      const date = new Date();
      const result = new Date(addWeek(date));

      expect(result.getUTCDate()).toBe(31); // December 31st
      expect(result.getUTCMonth()).toBe(11); // December
      expect(result.getUTCFullYear()).toBe(2024);
    });

    test("preserves time component", () => {
      const date = new Date("2024-01-01T12:30:45Z");
      const result = new Date(addWeek(date));

      expect(result.getUTCHours()).toBe(12);
      expect(result.getUTCMinutes()).toBe(30);
      expect(result.getUTCSeconds()).toBe(45);
    });
  });

  describe("getStartAndEndDate", () => {
    test("returns properly formatted dates", () => {
      // Mock January 1st, 2024
      jest.setSystemTime(new Date("2024-01-01").getTime());

      const { startDate, endDate } = getStartAndEndDate();

      // Verify start date
      expect(startDate).toBe("2024-01-01T00%3A00%3A00.000Z");

      // Verify end date (7 days later)
      expect(endDate).toBe("2024-01-07T00:00:00.000Z");
    });

    test("handles date rollover at year end", () => {
      // Mock December 25th, 2024
      jest.setSystemTime(new Date("2024-12-25").getTime());

      const { startDate, endDate } = getStartAndEndDate();

      expect(startDate).toBe("2024-12-25T00%3A00%3A00.000Z");
      expect(endDate).toBe("2024-12-31T00:00:00.000Z");
    });

    test("returns object with correct shape", () => {
      const result = getStartAndEndDate();
      expect(result).toHaveProperty("startDate");
      expect(result).toHaveProperty("endDate");
      expect(typeof result.startDate).toBe("string");
      expect(typeof result.endDate).toBe("string");
    });
  });
});
