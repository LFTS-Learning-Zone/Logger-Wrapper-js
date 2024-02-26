import { Logger, log, exception } from "./Logger.js";

//Try to run some data


let data = [];


for (let i = 0; i < 1000; i++) {
    let rng = Math.random() * 101;
    data.push(rng);

    console.log(rng);
}


Logger.shouldLog = true;

console.log("Wait...");
/* Logger.log("amongus amongus");
Logger.exception("amongus amongus"); */

myFunc();
myFunc2();





function myFunc(arg1){
    if(!arg1){
        exception("InvalidArgumentException");
    }
}

function myFunc2(arg1){
    try {
        document.getElementById(arg1)
        arg1.innerText = "a"
    }
    catch (error) {
        let myErr = new Error("my Error");
        console.log(myErr.stack)

        console.log(error.stack)

        throw error;
    }

    if(!arg1){
        throw("InvalidArgumentException Part 2")
    }
}