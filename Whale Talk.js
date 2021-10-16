// a function that translate human language to Whale language

const whaleLanguage = input => {
    //converting humans lang to Caps
    input = input.toUpperCase();
    //whale language is made up of only vowels
    const vowels = ['A','E','I','O','U'];
    // array to store the resultant Whale lang.
    let resultArray = [];
    
    // a loop through the human lang.
    for (let i = 0; i < input.length; i++){
    
       //a loop through the vowels to seach out whether the first letter in the human lang. is a vowel
      for(let j = 0; j < vowels.length; j++){
       // storing it in an array if the condition is true
       if(input[i] === vowels[j]){
         resultArray.push(input[i]);
       }
      }
    
      // doubling the vowel if the letter happens to be E or U just as in whale lang.
      if (input[i] === 'E'|| input [i]==='U'){
        resultArray.push(input[i]);
      }
     
      
    }
    //var firstPart = input.join();
    var secondPart = resultArray.join();
     return console.log(`in whale language is ${secondPart}`);
    }
    
    // Calling the function to translate a language.
    //whaleLanguage('Prof. Ohene Adjei will be one of the best programmers the world has ever seen');
    
    let translateThem = ['turpentine and turtles', 'Hi Humans', 'a whale of deal', 'To err is human'];
    let i =0;
    while( i < translateThem.length){
      console.log(`${translateThem[i]} `);
      whaleLanguage(translateThem[i]);
      console.log();
      console.log();
      i++
    }
    
     
    //console.log(total);