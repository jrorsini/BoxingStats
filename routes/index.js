var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request')
var cheerio = require('cheerio');

const boxer_id = 474;

let boxer_data = {
  fight_list: []
};
let fight;
let data;

request('http://boxrec.com/en/boxer/' + boxer_id, (err, res, html) => {
  const $ = cheerio.load(html)
  if(!err) {
    $('.dataTable tr').map((e, i) => {
      setTimeout(() => {
        const date = $('.dataTable tr').eq(e).children().eq(1).text().trim()
        if(/\d/g.test(date)) {
          const url = 'http://boxrec.com' + $('.dataTable tr').eq(e).children().eq(10).children().eq(0).children().eq(1).prop('href');
          fight = {
            fight_date: date,
            opponent_name: $('.dataTable tr').eq(e).children().eq(3).text().replace(/\d/g,'').trim(),
            opponent_stats: $('.dataTable tr').eq(e).children().eq(3).text().replace(/[A-Za-z\n]/g,'').trim(),
            result: $('.dataTable tr').eq(e).children().eq(7).text().replace('\n','').trim(),
            score: $('.dataTable tr').eq(e).children().eq(8).text().replace(/[\n\/\d]/g,'').trim(),
            round: $('.dataTable tr').eq(e).children().eq(8).text().replace(/[\nA-Z]/g,'').trim()
          };
          request(url, (err, res, body) => {
            const jQuery = cheerio.load(body)
            fight.points = jQuery('.responseLessDataTable tr').eq(12).text().trim().split(' ')[0].replace(/\D/g,'');
            fight.age = jQuery('.responseLessDataTable tr').eq(14).text().trim().split(' ')[0].replace(/\D/g,'')
            boxer_data.fight_list.push(fight)
            data = '[' + JSON.stringify(boxer_data)+ ']';
            if(data.length > 50) {
              fs.writeFile('public/data/' + boxer_id + '.json', data , err => {
                if(!err) {
                  console.log('File for boxer ' + boxer_id + ' saved!')
                }
              })
            }
          })
        }
      }, 2000);
    });
  }
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
