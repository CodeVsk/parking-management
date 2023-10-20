export const dateFormat = (value) => {
  const date = new Date(value);

  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};
