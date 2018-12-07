//  Exercices 1
//console.log("HELLO WORLD")

// Exercice 2
//print process.argv


//var result = 0;

  //for (var i = 2; i < process.argv.length; i++){
  //  result += Number(process.argv[i]);
//}
  //console.log(result);

  //Exercice 3
  
// var fs = require("fs")
//var string=fs.readFileSync(process.argv[2]).toString()
//var arr=string.split("\n")
 //console.log(arr.length-1)


 //exercice 4
 

/*const fs = require('fs');
var path=process.argv[2];

fs.readFile(path ,function callback(err,data){

    if(err){return err }
    
      var  string=data.toString()
      var arr=string.split("\n")
      var l=arr.length-1
      console.log(l)

     
});
*/

//exercice 5

/*var fs=require("fs")
var path=require("path")



var dir= process.argv[2];
var  ext=process.argv[3];
 //console.log(dir)
fs.readdir(dir, function callback(err, list) {

  if(err){ return err }
   // console.log(list);
   var l=list.length;
 
    for (var i=0; i<l; i++) {
        var x=list[i];
        var e=path.extname(x)
        console.log(path)
        if(e=="."+ext){
         console.log(x)
        }
      
    }
})*/


//Exercice 6

/*var mymodule=require("./mod.js")
var dir= process.argv[2];
  var  ext=process.argv[3];
function callback(err, data){
  if(err)return err
  for(var i=0;i<data.length;i++)
   console.log(data[i])
}


mymodule(dir , ext, callback)*/

//Exercice 7



var http=require("http");

var urlPath=process.argv[2]
//console.log(urlPath)
http.get(urlPath, function callback(res){

  res.setEncoding("utf8");
  res.on("data",function(data){
    console.log(data)
  })
})

    



 
   
    


    