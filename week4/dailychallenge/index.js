// nested loop//
let rows = 6;
let char = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    char += "*";
  }
  char += "\n";
}
console.log(char);

//loop//
for(let i=1; i<=6; i++){
    console.log("*".repeat(i));
 }


