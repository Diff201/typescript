import { a, a1, a2, a3, a4, family, isPalindrom, isTwins, shoppingList, sumValObj } from './BasicTypes';
import { sumEven } from './practice';

console.log(a);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

console.log(sumValObj([{ a: 20, b: 30 }, {}, { a: 3 }, { x: 5 }]));

shoppingList(family);

console.log(isPalindrom(`кабак`));
console.log(isPalindrom(`дед`));
console.log(isPalindrom(`ротатор`));
console.log(isPalindrom(`ротор`));
console.log(isPalindrom(`комок`));

console.log(isTwins(123, 321));

sumEven([1, 2, 3, 4, 5]);
