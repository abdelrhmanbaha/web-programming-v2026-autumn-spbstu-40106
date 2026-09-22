const ZODIAC_SIGNS = [
  {sign: 'Козерог', endMonth: 1, endDay: 19},
  {sign: 'Водолей', endMonth: 2, endDay: 18},
  {sign: 'Рыбы', endMonth: 3, endDay: 20},
  {sign: 'Овен', endMonth: 4, endDay: 19},
  {sign: 'Телец', endMonth: 5, endDay: 20},
  {sign: 'Близнецы', endMonth: 6, endDay: 20},
  {sign: 'Рак', endMonth: 7, endDay: 22},
  {sign: 'Лев', endMonth: 8, endDay: 22},
  {sign: 'Дева', endMonth: 9, endDay: 22},
  {sign: 'Весы', endMonth: 10, endDay: 22},
  {sign: 'Скорпион', endMonth: 11, endDay: 21},
  {sign: 'Стрелец', endMonth: 12, endDay: 21},
  {sign: 'Козерог', endMonth: 12, endDay: 31},
];

export function getZodiacSign(date) {
  const d = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(d.getTime())) {
    throw new Error('Invalid date provided');
  }

  const month = d.getMonth() + 1;
  const day = d.getDate();

  for (const {sign, endMonth, endDay} of ZODIAC_SIGNS) {
    if (month === endMonth && day <= endDay) {
      return sign;
    }
    if (month === endMonth - 1 && day > endDay) {
      return sign;
    }
  }

  return ZODIAC_SIGNS[0].sign;
}
