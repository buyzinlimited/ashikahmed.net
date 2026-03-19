export default defineNuxtPlugin((nuxtApp) => {
  // Date formatter
  nuxtApp.provide("date", (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-BD", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  });

  // Time formatter
  nuxtApp.provide("time", (timeString) => {
    if (!timeString) return "";

    const [hour, minute] = timeString.split(":");
    const date = new Date();
    date.setHours(hour, minute);

    return new Intl.DateTimeFormat("en-BD", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  });
});
