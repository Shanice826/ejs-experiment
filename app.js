const express= require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set("view engine", "ejs" )

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))


let programmingLanguages = ["C", "C++", "Java",]


app.get("/", (req, res) => {
    res.render("index", {pageTitle: "Homepage", programmingLanguages: programmingLanguages})
})

app.get("/contact", (req, res) => {
    res.render("contact", {pageTitle: "Contact Page"})
})

app.post("/", (req, res) => {

    programmingLanguages.push(req.body.programmingLanguages)
    console.log(programmingLanguages)
   res.render("index", {pageTitle:"Homepage" , programmingLanguages:programmingLanguages})
    })


app.listen(port, ()=>{
    console.log(`This server is running on ${port}`)
})

