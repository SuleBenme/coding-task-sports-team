export const getDateFrom = () => {
  const date = new Date();
  date.setDate(date.getDate() - 2);
  const dateFormated = formatDate(date);
  return dateFormated;
};

export const getDateTo = () => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const dateFormated = formatDate(date);
  return dateFormated;
};

const formatDate = (dateFormat: Date) => {
  return (
    dateFormat.getFullYear() +
    "-" +
    ("0" + (dateFormat.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + dateFormat.getDate()).slice(-2)
  );
};
