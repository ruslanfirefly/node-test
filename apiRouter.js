const express = require("express");

module.exports = (db)=>{
  const router = express.Router()
  
  router.get("/posts", (req, res) => {
    db.Post.find()
    .then(data=>{
      res.json(data)
    })
  })
  router.post("/posts", (req, res)=>{
    const post  = new db.Post(req.body)
    post.save(function(err){
      res.json(err);
    }) // _id
  })
  router.get("/test_data", (req, res) => {
   for(let i=0; i<101; i++){
     (new db.TestData({
       title: `test title ${i}`,
       autor: i, 
       text: `text_${i}`,
       custom_field: (i+1) 
     })).save()
   }
   res.json({finish:"done"})
  })
  
  router.get("/test/:name", (req, res) => {
    res.json({
      hello: req.params.name
    })
  })
  
   return router
}
