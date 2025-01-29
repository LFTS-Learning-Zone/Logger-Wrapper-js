# For terminals:
https://misc.flogisoft.com/bash/tip_colors_and_formatting

JS package: [crayon](https://github.com/crayon-js/crayon)

# For coloring web console:
- Write normal text
- Prepend "%c" before text
- The last argument of console.log must be a css rule
- Add "%c" to finalize or keep adding styles






# Flow

The tool uses arg order to determine if it will format or not:

> Console.log(arg1, arg2, arg3, ..., argN);

The toll will format in these conditions:

arg1 WILL format if:
1. is a config object, which may have the properties:
   1. LogLevel
   2. Array<textStyles>
2. is a LogLevel enum object
3. is a keyword from LogLevel enum ("info", "warn", "error", "debug")

arg1 WILL NOT format if
1. plain primitives datatypes are passed that do not match keywords


Rules to formating
1. Arg1 is a config object, then:
   1. Arg2 is the title/tag
   2. Arg3... are any data passed that WILL be formated based on Array<textStyles>. Default to no style if empty
2. Arg1 is a LogLevel enum object
   1. Arg2 is the title/tag
   2. Arg3... are any data passed. They WILL NOT be formated
3. Arg1 is a keyword from LogLevel enum object
   1. Arg2 is the title/tag
   2. Arg3... are any data passed. They WILL NOT be formated.


Log is a generic method, it will not enforce style.

However, specialized methods will enforce style and simplify argument use for users. These are:

- Debug
- Info
- Warn
- Error





# Simplest use

Only first n texts are formated? (prefix and description)

test:
```js
console.log("%c my text", "color:red", {}, "texto", "%cseu texto", "color:pink", 1)
```