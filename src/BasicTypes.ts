export const a: number = 73;
console.log(a);

const b: number = 22;
console.log(b);

/// Укажите типы

export const a1: A = {
  age: 10,
  nick: 'mynick',
  info: [1, 100],
  photo: 'string',
};

export const a2: A = {
  age: '10 years',
  nick: '',
  info: { id: 100 },
  photo: null,
};

export const a3: A = {
  nick: '       ',
  info: ['secret', 'key'],
};

export const a4: A = {
  nick: '',
  info: {},
};

export type A = {
  age: number;
  nick: string;
  info: number[];
  photo: string;
};

///Сумма значений объектов

export type ValObj = Record<string, number>;

export const sumValObj = (arr: ValObj[]): number => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentObj = arr[i];

    for (const currentObjKey in currentObj) {
      total += currentObj[currentObjKey];
    }
  }
  return total;
};

/// Список покупок
export type Product = {
  name: string;
  count: number;
  price: number;
};

export type Person = {
  name: string;
  products: Product[];
};

export type Family = {
  name: string;
  persons: Person[];
};

export const shoppingList = (family: Family) => {
  console.log(`Список покупок семьи "${family.name}"\n`);

  let familyTotal = 0;

  for (const person of family.persons) {
    console.log(`Покупки ${person.name}:`);

    let personalTotal = 0;
    let personProductCount = 0;

    for (const product of person.products) {
      console.log(`  *  ${product.name} (${product.count})`);
      personalTotal += product.count * product.price;
      personProductCount += product.count;
    }

    familyTotal += personalTotal;

    console.log(`Всего ${person.products.length} позиций (${personProductCount} штук) на ${personalTotal} руб`);
  }

  console.log(`Всего семья купила на ${familyTotal} руб\n`);
};
export const family: Family = {
  name: 'Алексеевы',
  persons: [
    {
      name: 'Отец',
      products: [
        { name: 'Кофе', count: 2, price: 9 },
        { name: 'Колбаса', count: 3, price: 11 },
        { name: 'Огурцы', count: 3, price: 6.12 },
      ],
    },
    {
      name: 'Мать',
      products: [
        { name: 'Молоко', count: 1, price: 3.55 },
        { name: 'Сыр', count: 74, price: 2 },
      ],
    },
    {
      name: 'Дочь',
      products: [
        { name: 'Конфеты', count: 29, price: 9.67 },
        { name: 'Лимонад', count: 30, price: 0.55 },
        { name: 'Салат', count: 3, price: 9.25 },
        { name: 'Помидоры', count: 3, price: 3.09 },
      ],
    },
    {
      name: 'Сын',
      products: [{ name: 'Чипсы', count: 1, price: 1 }],
    },
  ],
};

/// Палиндром
export const isPalindrom = (word: string): boolean => {
  const wordLow = word.toLowerCase();
  for (let i = 0; i < wordLow.length / 2; i++) {
    if (wordLow[i] !== wordLow[wordLow.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

/// Числа-близнецы

export const isTwins = (num1: number, num2: number): boolean => {
  let reversed = 0;
  let copyOriginalNum = num1;

  while (copyOriginalNum > 0) {
    const lastDigit = copyOriginalNum % 10;
    reversed = reversed * 10 + lastDigit;
    copyOriginalNum = Math.floor(copyOriginalNum / 10);
  }

  return reversed === num2;
};
