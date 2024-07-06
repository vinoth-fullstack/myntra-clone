let express=require('express');
let app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html")
    
})
app.get("/men",function(req,res){
    res.sendFile(__dirname +"/men.html")
    
})
app.get("/women",function(req,res){
    res.sendFile(__dirname +"/women.html")
    
})
app.get("/kids",function(req,res){
    res.sendFile(__dirname +"/kids.html")
    
})
app.get("/beauty",function(req,res){
    res.sendFile(__dirname +"/beauty.html")
    
})
app.get("/studio",function(req,res){
    res.sendFile(__dirname +"/studio.html")
    
})
app.get("/home&living",function(req,res){
    res.sendFile(__dirname +"/home&living.html")
    
})
app.get("/wishlist",function(req,res){
    res.sendFile(__dirname +"/wishlist.html")
    
})
app.get("/cart",function(req,res){
    res.sendFile(__dirname +"/cart.html")
    
})




app.get("*",function(req,res){
    res.send("<h1>404 Page not found</h1>")
})


app.listen(1500,console.log("Express listening"))