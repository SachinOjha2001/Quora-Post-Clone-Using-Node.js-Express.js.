const express=require("express");
const app=express();
const port=3030;
const path=require("path");
const { v4: uuidv4 } = require('uuid'); //Create Random id For POst
const methodOverride=require("method-override"); //Implement Method Overide


app.use(express.urlencoded({extended:true}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id: uuidv4(),
    username :"PPC A TO Z",
    content :"this is my youtube channel"
    },
    {
        id: uuidv4(),
    username :"PPC",
    content :"I'm Sachin Kumar Ojha"
    },
    {
        id:uuidv4(),
    username :"Kumar",
    content :"When i saw ,she was not there"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});    
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
let {id}=req.params;
let post=posts.find((p)=>id===p.id);
res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
   let {id}=req.params;
   let newCont=req.body.content;
   let post=posts.find((p)=>id===p.id);
   post.content=newCont;
   console.log(post);
   res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>
{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});


app.delete("/posts/:id/",async(req,res)=>{
   let {id}=req.params;
     posts =posts.filter((p)=>id !==p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("Listening To Port :3030");

});
