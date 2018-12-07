 

  var fs=require("fs")
  var path=require("path")
  

  module.exports=function filter(dirName,extStr, cb){
    var arr=[];
fs.readdir(dirName, function callback(err, list) {

  if(err){ return cb(err) }
   var l=list.length;
 
    for (var i=0; i<l; i++) {
      
        var x=list[i];
        var e=path.extname(x)
        if(e=="."+extStr){
         arr.push(x)
        }
      
    }
    return cb(null,arr)
})
}

