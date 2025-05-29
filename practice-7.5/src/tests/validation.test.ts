import { validateDate, validateCity } from '../validation';

describe('validateDate', () => {
  test('пропускает дату в формате ДД.ММ.ГГГГ', () => {
    expect(validateDate('30.12.2099')).toBe(true);
  });

  test('не пропускает спецсимволы', () => {
    expect(validateDate('30.12.20@9')).toBe(false);
  });

  test('не пропускает буквенные значения', () => {
    expect(validateDate('30.декабря.2099')).toBe(false);
  });

  test('выдаёт false, если дата раньше текущей', () => {
    const yesterday = new Date(Date.now() - 86400000);
    const day = String(yesterday.getDate()).padStart(2, '0');
    const month = String(yesterday.getMonth() + 1).padStart(2, '0');
    const year = yesterday.getFullYear();
    expect(validateDate(`${day}.${month}.${year}`)).toBe(false);
  });
});

describe('validateCity', () => {
  test('выдаёт false, если есть экранирование', () => {
    expect(validateCity('New <York>')).toBe(false);
    expect(validateCity('Los&Angeles')).toBe(false);
  });

  test('пропускает название с восклицательным знаком и дефисами', () => {
    expect(validateCity('Saint-Louis-du-Ha! Ha!')).toBe(true);
  });

  test('пропускает название со спецсимволами', () => {
    expect(validateCity('Ağrı')).toBe(true);
  });

  test('пропускает название из одной буквы', () => {
    expect(validateCity('A')).toBe(true);
  });
});
