const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');

let Parser = require('rss-parser');
let parser = new Parser();

async function rssParser () {

  let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
  let result = []

  feed.items.forEach(item => {
    result.push({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      creator: item.creator,
      category: item.category,
      content: item.contentSnippet
    })
   });
  return result;

};


dotenv.config();
const app = express();
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:true}))
app.use(cors());


app.listen(process.env.PORT||8080, ()=>{
    console.log(`running on ${process.env.PORT||8080}`);
})


app.get('/', (req,res)=>{
  let myPromise = rssParser();
  myPromise
  .then(arrayOfObjs => {
    res.render(path.join(__dirname, 'views/pages/index.ejs'), {arrayOfObjs: arrayOfObjs})
  })
})

app.get('/search', (req,res)=>{
  res.render(path.join(__dirname, 'views/pages/search.ejs'))
})

app.post('/search/title', (req,res)=>{
  let title = req.body.title.toLowerCase();
  let myPromise = rssParser();
  myPromise
  .then(arrayOfObjs => {
    arrayOfObjs = arrayOfObjs.filter((object)=>object.title.toLowerCase().includes(title))
    res.render(path.join(__dirname, 'views/pages/search.ejs'), {arrayOfObjs: arrayOfObjs})
  })

})

app.post('/search/category', (req,res)=>{
  res.render(path.join(__dirname, 'views/pages/search.ejs'))
})


