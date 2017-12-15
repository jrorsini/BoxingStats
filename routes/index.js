var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request')
var cheerio = require('cheerio');

const boxer_id = 474

request('http://boxrec.com/en/boxer/' + boxer_id, (err, res, html) => {
  const $ = cheerio.load(html)
  let boxer_data = {
    fight_list: []
  };
  let fight 
  let data;
  if(!err) {
    // const boxer_fight = { date, opponent_name, opponent_stats, result, type }
    $('.dataTable tr').map((e, i) => {
      fight = {
        fight_date: $('.dataTable tr').eq(e).children().eq(1).text().trim(),
        opponent_name: $('.dataTable tr').eq(e).children().eq(3).text().replace(/\d/g,'').trim(),
        result: $('.dataTable tr').eq(e).children().eq(7).text().replace('\n','').trim(),
        score: $('.dataTable tr').eq(e).children().eq(8).text().replace(/[\n\/\d]/g,'').trim(),
        round: $('.dataTable tr').eq(e).children().eq(8).text().replace(/[\nA-Z]/g,'').trim()
      };
      boxer_data.fight_list.push(fight)
    })

    data = '[' + JSON.stringify(boxer_data)+ ']';

    if(data.length < 1000) {
      fs.writeFile('public/data/' + boxer_id + '.json', data , err => {
        if(!err) {
          console.log('File for boxer ' + boxer_id + ' saved!')
        }
      })
    }
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
