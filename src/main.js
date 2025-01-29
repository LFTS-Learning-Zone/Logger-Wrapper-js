import { Logger, log, exception, LogLevelStyles } from "./Logger.js";

Logger.shouldLog = true;

console.log("Wait...");
let mockObj = {x: "", y: 2}

console.group("Test Switches");

console.group("Single argument - Primitives and Objects must not be formated")
log("MyString");    //Expects "MyString" not formated
//log(1);             //Expects 1 not formated
//log(true);          //Expects true not formated
//log({a, b: 2});     //Expects plain object not formated
console.groupEnd();

console.group("Two arguments - Primitives and Objects must not be formated IF first object does not contain styling interface");
log("Some string", "MyString");     //Expects both strings not formated
log("Some string", 1);              //Expects both: string and number not formated
log(1, "MyString");                 //Expects both: string and number not formated
log(mockObj, "MyString");            //Expects both: Object and string not formated
log("MyString", mockObj);           //Expects both: Object and string not formated
console.groupEnd();

console.group("Two arguments - IF first argument is object containing styling interface, format following arguments");
log(LogLevelStyles.Info, "MyString");   //Expects both strings not formated
log("Some string", 1);                  //Expects both: string and number not formated
log(1, "MyString");                     //Expects both: string and number not formated
log(mockObj, "MyString");               //Expects both: Object and string not formated
log("MyString", mockObj);               //Expects both: Object and string not formated
console.groupEnd();

console.groupEnd();

log(LogLevelStyles.Info, "Prefix", "My data is here");
log(LogLevelStyles.Info, "Something aint right");
log(LogLevelStyles.Warn, "Uh Oh", "My data is here","and here", "and there", "\n", "now here", "thus here %c","there ","there ","there","there","there");
log(LogLevelStyles.Warn, "Uh Oh", `your data is ${a}`, a);
log(LogLevelStyles.Error, "Fatal error", `your data is ${a}`);

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