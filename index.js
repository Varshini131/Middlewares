const express= require("express");

const app=express();

let requestCount=0;
// middleware has an extra argument next along with request 
// and response
function requestIncreaser(req,res,next){
    requestCount=requestCount+1;
    console.log("Total number of requests: "+requestCount);
    next();
}

function realSumHandler( req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans:a+b,
    })
}


function realMultiplyHandler(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans:a*b,
    })
}



// individual route handler
app.get("/sum",requestIncreaser,realSumHandler);

app.get("/multiply",requestIncreaser,realMultiplyHandler);





app.listen(3001);