let fs = require('fs');
let i = 0;
let resault = '';
let inText = fs.readFileSync('code.txt');
inText = inText.toString();
for (i; i < inText.length;) {
    let ch = inText[i];
    if (ch == '#') {
        resault += inText[i + 2].repeat(inText[i + 1].charCodeAt(0))
        i += 3
    }
    else {
        resault += ch
        i += 1
    }   
    
    }
console.log(resault);
fs.writeFileSync("test.txt", resault);
