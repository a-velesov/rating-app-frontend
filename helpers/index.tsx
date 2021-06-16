export const currencyHandler = (value: number): string => {
    return value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
};