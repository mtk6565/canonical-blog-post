/**
 * Formats a date into a more readable format.
 * @param {string} date - A date string in the ISO 8601 format.
 * @return {string} Returns the formatted date in "Day Month Year" format.
 */
export function getDate(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(date)
  );

  return formattedDate;
}
