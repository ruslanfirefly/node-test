const express = require("express"); 
const app = express();

app.use((req, res, next)=>{
    console.log("Hello use")
    next();
    console.log("test")
})

app.all("*", (req, res, next)=>{
    req.test_field = "Test Field";
    next();
})

app.get("/", (req, res, next)=>{
    res.status(200);
    res.setHeader("Content-type", "text/html")
    res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">     
        <title>React App</title>
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"> Hello Html - ${req.test_field}</div>
      </body>
    </html>
    `)
    // res.json({
    //     hello:"world"
    // })
})


app.use((req, res)=>{
    res.status(404)
    res.send("Not Found")
})

app.listen(3000, ()=>{
    console.log("Server Starts on 3000 port")
})


