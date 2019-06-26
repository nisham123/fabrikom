var express = require('express');
var app = express();


var customerController=function(req, res){
  console.log("Invoking  rest api for product list");
  var customers = [
    {id:1, name:"aliya" ,city:"ngp",email:"aliya@",phoneno:"21312"},
	{id:2, name:"raj" ,city:"pune",email:"raj@",phoneno:"12233"},
	{id:3, name:"rukhsar" ,city:"wani",email:"ruk@",phoneno:"89768"},
	{id:4, name:"shahrukh" ,city:"solapur",email:"srk@",phoneno:"56756"}
  ];
  res.send(customers);
};


app.get ('/customers',customerController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})