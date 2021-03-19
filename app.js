const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'
const port = process.env.PORT || 9000;
const DB = "mongodb+srv://sayalee:Sayali@6173@cluster0.3rgxm.mongodb.net/crudjsstack?retryWrites=true&w=majority"

const app = express()

mongoose.connect(DB), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}.then(() => {
  console.log('connection successful');
}).catch((err) => console.log('no connection..'));

mongoose.connect(url, {useNewUrlParser : true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(port, () =>{
  console.log('server started')
})

//app.listen(9000,function(){
   // console.log('server started')
//})