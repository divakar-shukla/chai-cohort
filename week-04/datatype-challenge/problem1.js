// problem 1
function reverseString(string){
    let reversed = "";
    for(let i = (string.length-1); i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
}

console.log(reverseString("suraj"))



// Problem 2

function findMaxNum(numbers){
return Math.max(...numbers)
}

// problem 3

function countVowel(a){

    let count = 0;
    let vowels = ["a", "e", "i", 'o', "u"];
    a.toLowerCase().split("").forEach((element) => {
        vowels.forEach((vowel)=>{
            if(vowel == element) count++
        })
    });

    return count
}

console.log(countVowel("Javascript"))