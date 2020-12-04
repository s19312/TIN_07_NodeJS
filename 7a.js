const http = require('http');
const url = require('url');
http.createServer((request, response) => {
    response.write("format : http://localhost:3553/?operator=(add,sub,mul or div)&num1=...&num2=..."
        + "\nExampe : http://localhost:3553/?operator=add&num1=1&num2=1");
    const queryObject = url.parse(request.url, true).query;
    var operator = queryObject.operator;
    var num1 = parseInt(queryObject.num1);
    var num2 = parseInt(queryObject.num2);
    var answer = null;
    if (num1 != null && num2 != null && (operator === "add" || operator === "sub" || operator === "mul" || operator === "div")) {
        if (operator === "add") {
            answer = num1 + num2;
            response.end("\n" + num1 + " + " + num2 + " = " + answer);
        } else if (operator === "sub") {
            answer = num1 - num2;
            response.end("\n" + num1 + " - " + num2 + " = " + answer);
        } else if (operator === "mul") {
            answer = num1 * num2;
            response.end("\n" + num1 + " * " + num2 + " = " + answer);
        } else {
            answer = num1 / num2;
            if (num2 === 0) {
                response.end("\n num2 = 0 \n Can't divide by 0!");
            }
            response.end("\n" + num1 + " / " + num2 + " = " + answer);
        }
    } else {
        response.end("\nSomething went with url! Follow the format");
    }
}).listen(3553);
