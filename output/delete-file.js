const fs= require("fs");
fs.writeFileSync("./output/temp.txt","This is temp file");
console.log("temp file created");
// if(fs.existsSync("./output/temp.txt")){
//     console.log("file exists!!!");
//     fs.unlinkSync("./output/temp.txt");
//     console.log("file deleted");
// }
try{
    fs.unlinkSync("./output/temp.txt")
}catch(error){
    console.log("Error :",error.message);
}


// asyn

fs.writeFile("./output/temp2.txt","another temp file",(error)=>{
    if(error) return console.log(error.message);
    console.log("another temp file created");

    fs.unlink("./output/temp2.txt",(error)=>{
        if(error){
            console.error("error :",error.message);
        }else{
            console.log("temp2 deleted");
        }
    })
})
