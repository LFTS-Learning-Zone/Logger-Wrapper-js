/**
 * Logger to aid developers enable log messages quickly in special points and prevent spamming. Activate when needed
 * 
 * By default the logger won't log until ``shouldLog`` is set to ``js true``
 * 
 * @example
 * ```js
 *  Logger.shouldLog = true;
 *  Logger.log("I am a message");
 *  Logger.exception("NameOfMyException")
 * ```
 */
export class Logger{
    static shouldLog = false;
    static shouldEmbedTimestamp = false;

    /**
     * When applying styles, there must be only 1 text being the first argumentent,
     * the rest arguments must be equivalent are css objects equivalent to the number of %c existant
     * @param {styleConfig | LogLevelStyles} logLevel 
     * @param {Array<String>} args 
     * @returns 
     */
    static log = function(logLevel, ...args){
        if(!Logger.shouldLog) return;
        
 
        let context = "";
        let strings = args;
        let styleList;

        if(typeof logLevel == "string"){
            styleList = [logLevel];
        }
        else if(typeof logLevel == "object"){
            styleList = logLevel.styleList;
        }

        console.log("DEBBUGGING");

        if(strings.length > 1){
            for (let index = 0; index < strings.length - 1; index++) {
                styleList.push(LogLevelStyles.NoStyle);       
            }
        }
        //Add space to make it better to read
        if(strings[1]) strings[1] = " " + strings[1];
        //Everyone receives
        strings.forEach((text, i) =>{
            strings[i] = "%c" + text;
            context += strings[i];
        });

        return console.log.call(console, context, ...styleList);
    }

    /**
     * @type {Function}
     * @returns {Function}
    */
    static exception = function(errorName, header, prefix = ""){
        if(!Logger.shouldLog) return;

        let err = new Error(errorName);
        let context = header ? `${header}\n` : "";
        
        /* return Function.prototype.bind.call(console.error, console, context, err.stack)(); */
        return console.error.call(console, context, err.stack);
    }
}

export const LogLevelStyles = {
    Info: "background-color: #8bd2f0; color: white; border-radius: 1rem; padding: 0px 4px",
    Warn: "background-color: #fef848; color: black; border-radius: 1rem; padding: 0px 4px",
    Debug: "background-color: #8bd2f0; color: white; border-radius: 1rem; padding: 0px 4px",
    Error: "background-color: #8bd2f0; color: white; border-radius: 1rem; padding: 0px 4px",
    NoStyle: "background-color: inherit; color: inherit;"
}

const styleConfig = {
    LogLevel: LogLevelStyles.NoStyle,
    textStyles: [],
}

export const log = Logger.log;
export const exception = Logger.exception;