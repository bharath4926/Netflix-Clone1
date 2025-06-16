function generatePassword(length,includeLowercase,includeUppercase,includeSymbols){

    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRESTUVXYZ";
    const numberChars="0123456789";
    const symbolsChars="@#&!"

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase ? lowercaseChars:"";
    allowedChars+=includeUppercase ? uppercaseChars:"";
    allowedChars+=includeNumbers ? numberChars:"";
    allowedChars+=includeSymbols ? symbolsChars:"";
    
    if(length<=0){
        return`(password length must be atleast 1)`;
    }
    if(allowedChars.length===0){
        return `(at least 1 set of character needs to be selected)`;
    }
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }
        
    
    return password;
}
const passwordLength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;

const password=generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
);
console.log(`generated password: ${password}`);