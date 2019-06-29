/**
 * 
 * *************
 * Comience aqui
 * *************
 * 
 */

const fs= require("fs")
const ops= require("./src/fileops")

let incValue

fs.readFile("./resources/number.txt","utf8",(err,text)  => {
  if(err) throw err
  //console.log(text) 
  const numbers=text.split("\n").map(n => Number(n))
  console.log(numbers)
  //console.log(ops.incrementValues(numbers))
  incValue=ops.incrementValues(numbers)
  fs.writeFile("./resources/numbernew.txt",incValue.join("\n"),(err,result)=> {
    if(err) throw err
})

})



