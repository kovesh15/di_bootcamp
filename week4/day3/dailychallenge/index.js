const sentence = 'Hello, World, in, a, frame';

const splitSentence = value =>{
    let result = value.split(',');

    // result.map(str => {
    //     const trimedstr = str.trim();
    //     return trimedstr;
    // })

    result =trimEachWordOfSentenceArray(result)
    return result;
}

const trimEachWordOfSentenceArray = arr => {
  return arr.map (str => {
    const trimedStr = str.trim();

    return trimedStr;
  })
};

const words = splitSentence (sentence);

console.log(words);

var number = 5;
let string =''; 
for(let i=1; i<=number; i++){
  for(let j=1; j<=number; j++){
    if(i===1 || i===number){
      string += '*';
    }else if(true){
      if(j===1 || j===number){
        string += '*';
      }else{
        string +=' ';
      }
    }
  }
  string += '\n';
}
console.log(string);