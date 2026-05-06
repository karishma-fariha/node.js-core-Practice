const fs = require("fs");

const content1 = "This is a content\n node.js is awesome!!";

try{
fs.writeFileSync("./output/test-sync.txt",content1);
console.log("file written sync");
}catch(err){
    console.log(err.message);
}


const content2 = "This is a content2 \n node.js is awesome!! \n asynchronous..";
fs.writeFile("./output/test-async.txt",content2,(error)=>{
    if(error){
        console.log(error.message);
    }
    else{
        console.log("file written async");
    }
})
