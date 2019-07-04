const express = require('express')
const app = express()
const request = require('request')
const port = process.env.SERVER_PORT || 8080
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get("/sanity",function(req,res){
   res.send(console.log("OK"))
})


app.get("/recipes/:ingredient",function(req,res){
    let Ingredient=req.params.ingredient
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${Ingredient}`,function(error, response, body){
        let recipes=JSON.parse(body)
        let arr=recipes.results
        res.json(arr)
        
    })
})






app.listen( port, () => console.log( `Running server on port ${ port }` ) )