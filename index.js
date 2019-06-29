/**
 * 
 * *************
 * Comience aqui
 **************
 * 
 */

const call = require("./src/call")
/*
call.withCallback("Diego Cruz",call.sync)
*/
call.withPromise("Diego Cruz")
    .then(name => { console.log(name)})

