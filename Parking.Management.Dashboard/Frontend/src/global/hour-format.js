export const formatHour = (hour, minute) => {
  const hourBase = `${hour}:${minute}`;

  const regex = /(\d{1,2}):(\d{1,2})/;

  const formatedHour = hourBase.replace(regex, (match, hourIn, minuteIn) => {
    const hourZero = hourIn.padStart(2, "0");
    const minuteZero = minuteIn.padStart(2, "0");

    return `${hourZero}:${minuteZero}`;
  });

  return formatedHour;
};
