const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();
const port = 5000;
const url = "https://www.npmjs.com/package/cheerio";

axios
  .get(url)
  .then((res) => {
    const html = res.data;

    const $ = cheerio.load(html)
    const title = $('.pl-s1', html).text()
    console.log(title);
    
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log("Web scapper is runs on port ", port);
});
