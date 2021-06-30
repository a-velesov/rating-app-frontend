export const currencyHandler = (value: number): string => {
    return value.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });
};

export const decOfReviews = (number: number, titles: string[] = ['отзыв', 'отзыва', 'отзывов']): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};