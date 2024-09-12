import { ForecastType } from "@models";

export const convertDateTo12HrFormat = (date: Date) => {
  let hours = date.getHours();
  const currentHour = new Date().getHours();

  if (currentHour === hours) return "Now";

  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours} ${amPm}`;
};

export const getDayOfWeek = (date: Date): [string, boolean] => [
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()],
  new Date().getDate() === date.getDate(),
];

export const getCurrentDisplayText = (
  type: ForecastType,
  date: Date
): [string, boolean] => {
  if (type === ForecastType.Hourly) {
    const time = convertDateTo12HrFormat(date);
    return [time.toString(), time.toLowerCase() === "now"];
  }

  return getDayOfWeek(date);
};
