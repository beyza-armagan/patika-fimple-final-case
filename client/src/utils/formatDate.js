export function formatDate(date) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("tr-TR", options).format(date);
}
