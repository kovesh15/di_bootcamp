const array =['111' , '222' , '333'];

console.log(array.length)

for (let i = 0; i < array.length; i++){
    console.log(i)

    const element = array[i];

    console.log(element)
}

for (let count = 0; count < 10; count++){
    console.log(count+1)
}

for (let count = 10; count >= 0; count--){
    console.log(count)
}

// let person = {fname: 'john', Iname: 'Doe', age: 25};

// for (const key in person) {
//     console.log(key, 'is a' typeof key)

//     console.log(`property ${key}'s value is ${person[key]}`)
// }


debugger;
const whenToStop = new Date();
// console.log(now)
whenToStop.setSeconds(whenToStop.getSeconds()+10)

let i = 6;

do {
  console.log(i);
  i++;
} while (i < 5);

console.log(i);


let names = {fname: 'John', Iname: 'Doe', age: 25};
for(let i = 0; i < names.length; i++) {

}



// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// const array = Object.keys(person).reduce(reduced,propertyName) =>{
//     reduced.push({
//         key:propertyName;
//         values: person [propertyName]
//     })

//     return reduce;
// }

// let names= ["john", "sarah", 23, "Rudolf",34]
//  for (const item of names){
//     console.log(item)

//     // if(typeof item !-- 'string'){
//     //     break;
//     // }


//     const firstLetter = item.charAt(0);

//     console.log(firstLetter
//         )
//     console.log(item)
//  }

// var name = 'Sarah'

// function sayHello(){
//    console.log(name)
// }

// sayHello()
// console.log(name)


var age = 20

if (age > 18) {
    var canDrive = true;
    console.log(canDrive);
}

console.log (canDrive)


let name = "Sarah"

if (name === "Sarah"){

    let name = "Dan"
    console.log(name);
}

console.log(name);

let arr = [
    [1, 2],
    [4, 5],
    [5, 6],
];

