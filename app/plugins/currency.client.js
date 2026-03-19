export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("currency", (amount) => {
    if (amount === null || amount === undefined || amount === "") return "";

    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(amount);
  });
});

// {{ $currency(1500) }}
