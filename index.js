/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

 const call = require("./src/call")

 //call.greet("Diego Cruz")

 /*call.withPromise("Diego","Cruz")
 .then(n=>console.log(n))*/

 async function calwithPromise(){ 
     const fullName = await call.withPromise("Diego","Cruz")
     console.log(fullName)
    }

calwithPromise()
 
