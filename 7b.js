
const fs = require("fs");

function print(path) {
    fs.watch(path, (event, filename) => {
        if (event === "change") {
            fs.readFile(path, (error, content) => {
                if (error) {
                    console.log("error! " + error);
                } else {
                    console.log("File " + filename + " was changed");
                    console.log("Content of " + filename + ":"  + "\n" + content);
                }
            });
        }
    });
}
print('./text.txt');