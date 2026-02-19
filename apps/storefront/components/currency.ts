export const formatCurrency = (amount: number, currency: string, locale = 'it-IT') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
