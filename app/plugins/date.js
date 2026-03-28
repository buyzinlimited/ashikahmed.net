export default defineNuxtPlugin(() => {
  const formatDate = (dateString, locale = "en-BD") => {
    if (!dateString) return "";

    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const formatTime = (dateString, locale = "en-BD") => {
    if (!dateString) return "";

    return new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(dateString));
  };

  const formatDateTime = (dateString, locale = "en-BD") => {
    if (!dateString) return "";

    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(dateString));
  };

  const timeAgo = (dateString) => {
    if (!dateString) return "";

    const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const i of intervals) {
      const count = Math.floor(seconds / i.seconds);
      if (count >= 1) {
        return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  return {
    provide: {
      date: formatDate,
      time: formatTime,
      dateTime: formatDateTime,
      timeAgo,
    },
  };
});
