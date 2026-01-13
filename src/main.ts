const a: number = 73;
console.log(a);

const b: number = 22;
console.log(a + b);

/// Укажите типы

const a1: A = {
  age: 10,
  nick: 'mynick',
  info: [1, 100],
  photo: 'string',
};

const a2: A = {
  age: '10 years',
  nick: '',
  info: { id: 100 },
  photo: null,
};

const a3: A = {
  nick: '       ',
  info: ['secret', 'key'],
};

const a4: A = {
  nick: '',
  info: {},
};

type A = {
  age: number;
  nick: string;
  info: number[];
  photo: string;
};
console.log(a4);
console.log(a1);
console.log(a2);
console.log(a3);

///Сумма значений объектов

type ValObj = Record<string, number>;

const sumValObj = (arr: ValObj[]): number => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentObj = arr[i];

    for (const currentObjKey in currentObj) {
      total += currentObj[currentObjKey];
    }
  }
  return total;
};
console.log(sumValObj([{ a: 20, b: 30 }, {}, { a: 3 }, { x: 5 }]));

/// Список покупок

type Product = {
  name: string;
  count: number;
  price: number;
};

type Person = {
  name: string;
  products: Product[];
};

type Family = {
  name: string;
  persons: Person[];
};

const family: Family = {
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
