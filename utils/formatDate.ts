/**
 * Formats a date string from "YYYY-MM-DD" to "D Month YYYY" format.
 * @param inputDate - The input date string in "YYYY-MM-DD" format.
 * @returns The formatted date string.
 * @throws Error if the input date is invalid.
 */
export default function (inputDate: string): string {
  const date = new Date(inputDate);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
}
