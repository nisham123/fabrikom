var http=require('http');  

var product ={
    Employee_name:"Aliya",
	Employee_id:1,
	DeptNo:10,
	city:"pune"
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");"# test" 
