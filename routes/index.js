var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request')
var cheerio = require('cheerio');

const boxer_id = 474

request('http://boxrec.com/en/boxer/' + boxer_id, (err, res, html) => {
  const $ = cheerio.load(html)
  const boxer_data = {

  };
  const boxer_fight = {
    date,
    opponent_name,
    opponent_stats,
    result,
    type
  }
  let data = '';
  if(!err) {
    fs.writeFile('public/data/' + boxer_id + '.json', [JSON.stringify(data)], err => {
      if(!err) {
        console.log('File for boxer ' + boxer_id + ' saved!')
      }
    })
  }
});


const boutData = () => {
  request('http://boxrec.com/en/event/3252/4369', (err, res, html) => {
    const $ = cheerio.load(html)
    let data = '';
    if(!err) {
      fs.writeFile('/data/' + boxer_id + '.json', [JSON.stringify()], err => {
        if(!err) {
          console.log('File for boxer ' + boxer_id + ' saved!')
        }
      })
    }
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
