const express=require("express");
const app =express();
const PORT= 3000;


app.use(express.json()); 

app.get("/",(req,res)=>
    {
    res.json({message:"hello"});
});

app.post("/users", (req, res) => { 
res.json({ message: "POST request successful" }); 
}); 
app.put("/users/:id", (req, res) => { 
res.json({ 
message: "PUT request successful", 
id: req.params.id 
}); 
}); 
app.delete("/users/:id", (req, res) => { 
res.json({ 
message: "DELETE request successful", 
id: req.params.id 
}); 
}); 

app.listen(PORT,()=>
{
    console.log(`App is running on port ${PORT}`);
});

