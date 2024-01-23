const { log, exception, Logger } = require("./Logger.js");

//Try to run some data


let data = [];


for (let i = 0; i < 1000; i++) {
    let rng = Math.random() * 101;
    data.push(rng);

    console.log(rng);
}


Logger.shouldLog = false;

console.log("Wait...");
Logger.log("amongus amongus");
Logger.exception("amongus amongus");

log("nothing");
exception("NotFoundException", "Something did not went right");