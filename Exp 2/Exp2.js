// Firstly import fs(filesystem) module in your program
const f1=require("fs");
// Now create file and also write some content in that file 
f1.writeFile("stu.txt","Hello,this file is for students",(err)=>{
    if(err)
    {
        console.log("Error");
    }
    else{
        console.log("File successfully created");
    }

});
// now reading  file content
f1.readFile("stu.txt","utf-8",(err,data)=>{
if(err)
{
    console.log("Error");
}
else
{
   console.log("Reading content of file: ");
   console.log(data);
}

});
// Update a file using append method , it will only add extra content  in already existing file 
f1.appendFile("stu.txt"," File of CSE 3rd sem",(err)=>{
    if(err) throw err
    else
    {
        console.log("File successfully updated.")
    }

});

//Deleting the file
f1.unlink("stu.txt",(err)=>{
if(err) throw err
else
    {
        console.log("File successfully deleted.")
    }
});