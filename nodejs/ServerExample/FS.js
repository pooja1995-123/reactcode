const fs=require("fs");

//for read file
fs.readFile("text.txt","utf8",(err,data)=>{
    console.log(data);
})

//for override file
const str="Most Unix system calls have Windows analogues."

fs.writeFile("text.txt",str,()=>{
    console.log("update the file")
})

//for append file
const string="The docs link to the corresponding man pages which describe how the system call works";
fs.appendFile("text.txt",string,()=>{
    console.log("updated the file without cut any thing");
})