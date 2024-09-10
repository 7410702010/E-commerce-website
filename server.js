import express from "express";
import bodyParser from "body-parser";  
import exphas from  "express-handlebars"


const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine" , 'ejs')

app.get("/",(req,res) =>{
    res.render("app")
});




app.get("/contact",(req,res)=>{
    res.render('contact')
});


app.get("/sports",(req,res)=>{
    res.render('sports')
});




app.get("/explore",(req,res)=>{
    res.render('explore')
});


app.get("/login",(req,res)=>{
    res.render('login')
});


app.get("/buy",(req,res) =>{
    res.render("buy")
});

app.get("/success",(req,res) =>{
    res.render("success")
});

app.get("/track",(req,res)=>{
    res.render('track')
});

app.listen(PORT,() =>{
    console.log(`The Server Is Runing On ${PORT}`)
})