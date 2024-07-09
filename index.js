const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://example.com";

axios
  .get(url)
  .then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    const articles = [];
    $("h1").each((index, element) => {
      const title = $(element).text();
      articles.push({ title });
    });

    console.log(articles);
  })
  .catch((error) => {
    console.log(`Error fetching th URL ${error}`);
  });
