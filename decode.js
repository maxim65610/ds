let fs = require('fs')

fs.readFile(process.argv[2], (error, inText) => {
    if (error) {
        console.error(error);
        return;
    }

    inText = fs.readFileSync("test.txt");

    inText = inText.toString();

    result = ''
    for (i = 0; i < inText.length;) {
        let ch = inText[i]
        if (ch == '#') {
            result += inText[i + 2].repeat(inText[i + 1].charCodeAt(0))
            i += 3
        }
        else {
            result += ch
            i += 1
        }
    }

    fs.writeFile(process.argv[3], result, (error) => {
        if (error) {
            console.error(error)
        }
    })
})
