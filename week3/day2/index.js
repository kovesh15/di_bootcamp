const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.slice(0,1);
console.log(fruits); ['Apple', 'Oranges', 'Blueberries']

fruits.push('kiwi');
console.log(fruits);  ['Apple',  'Oranges', 'Blueberries', 'Kiwi']
fruits.shift();
console.log(fruits); ['Oranges', 'Blueberries', 'Kiwi']

fruits.sort();
console.log(fruits); ['Blueberries', 'Kiwi', 'Oranges']

fruits.reverse();
console.log(fruits); ['Oranges', 'Kiwi', 'Blueberries']

fruits.splice(0, 1);
console.log(fruits); ['Apples', 'Oranges', 'Blueberries']

fruits.push('kiwi');
console.log('fruits'); ['Apples', 'Oranges', 'Blueberries','Kiwi']
fruits.shift();
console.log(fruits); ['Oranges', 'Blueberries', 'Kiwi']

fruits.sort();
console.log(fruits);['Blueberries', 'Kiwi', 'Oranges']

fruits.reverse();
console.log(fruits);['Oranges', 'Kiwi', 'Blueberries']

const moreFruits = ["Banana", ["Apples", ["Oranges"], 'Blueberries']];
console.log(moreFruits[1][1].toString()); Oranges
console.log(moreFruits[1][1][0]); Oranges
console.log(moreFruits[1][1][1]); [Oranges]
