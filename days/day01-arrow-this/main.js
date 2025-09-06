// Задача: обычная функция vs стрелочная; сравнить this.
function greet(name) {
  console.log('Привет, ' + name + '!');
  console.log('this (func):', this);
}
const greetArrow = (name) => {
  console.log(`Привет, ${name}!`);
  console.log('this (arrow):', this);
};

greet('Макс');
greetArrow('Макс');

// Выводы (замени своими):
// 1) В стрелочной this лексический, не привязывается к вызову.
//
// 2) В обычной — зависит от контекста вызова.
