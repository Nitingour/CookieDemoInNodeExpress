const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.listen(3000,()=>{
  console.log("Server started....");
});


//congigure view engine :Hbs
var path=require('path');
app.set('views',path.join(__dirname,'views')); //location
app.set('view engine','hbs');//extension

//configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.get('/',(request,response)=>{
response.render('login');
});

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/check',(request,response)=>{
//login check code goes here
var userid=request.body.uid;
console.log(userid);
//add userid in cookie
response.cookie('user',userid);
console.log("Cookie Saved");
console.log(request.cookies);
response.render('Home',{'username':request.cookies});
});

app.get("/view",(request,response)=>{
response.render('view',{'username':request.cookies});
  })

app.get("/deletecookie" ,(request,response)=>{
response.clearCookie('user');
response.send("cookie deleted")

})
