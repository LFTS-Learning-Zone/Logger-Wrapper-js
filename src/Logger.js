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
     * @type {Function}
     * @returns {Function}
    */
    static log = function(args){
        if(!Logger.shouldLog) return;

        let context = `${args}`;
        return console.log.call(console, context);
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


export const log = Logger.log;
export const exception = Logger.exception;