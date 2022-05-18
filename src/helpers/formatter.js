export default new Intl.NumberFormat(['kk', 'ru-RU'], {
    style: 'currency',
    currency: 'KZT',
    minimumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol'
}).format
