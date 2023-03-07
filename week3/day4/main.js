const sentence = 'The movie is not that bad, I like it'

const positionNot = sentence .indexOf('not')
console.log(positionNot)

const positionBad = sentence .indexOf('bad')
console.log(positionBad)

if (positionNot < positionBad){

}

else{
    console.log(sentence);
}


let x = 5;
let y = 2;
 
if (x > y){
console.log( x > y)
}

else{
    console.log(x < y)
}



const newDog  = 'Chihuahua';
console.log(newDog .toUpperCase());
console.log(newDog.toLowerCase()); 
console.log(newDog.length);

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users.length);

// If there is no users (the users array is empty), console.log “no one is online”.

if(users.lenght === 0) {
   console.log('no one is online');
}

// If there is 1 user, console.log “<name_user> is online”.

// else if (users.length === 1){

//     console.log(users[0] + is online);
// }

// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// else if (users.length === 2){
//     console.log ($ {users[0]} and ${users[1]} are online);
// }


// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.




const number = 10;

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}