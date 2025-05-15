// Example for stopping the request-response cycle

const express= require("express");

const app=express();

let requestCount=0;
// middleware has an extra argument next along with request 
// and response
function requestIncreaser(req,res,next){
    requestCount=requestCount+1;
    if(req.body.cookie==="google"){
        next()
    }else{
        console.log("Total number of requests: "+requestCount);
        res.json({
            message:"I ended the request early"
        })

    }
}

function realSumHandler( req,res){
    console.log("control reached the real handler");
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans:a+b,
    })
}


function realMultiplyHandler(req,res){
    console.log("control reached the real handler");
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans:a*b,
    })
}
// another method by specifying global middleware
app.use(requestIncreaser)

app.get("/sum",realSumHandler);

app.get("/multiply",realMultiplyHandler);





app.listen(3001);