var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request')
var cheerio = require('cheerio');

const boxer_id = 474;

let boxer_data = {
  fight_list: []
};
let link_list = [];
let fight;
let data;

request('http://boxrec.com/en/boxer/' + boxer_id, (err, res, html) => {
  const $ = cheerio.load(html)
  if(!err) {
    let fight_date =  
    $('.dataTable .mobileActions').map((e, i) => {
      link_list.push($('.dataTable .mobileActions').eq(e).children().eq(2).prop('href'))
    });
    
    link_list.map(e => {
      request(e, (err, res, html) => {
        const jQuery = cheerio.load(html);
        $('.dataTable tr').map((e, i) => {
          console.log(fight)
          fight = {
            fight_date: $('.dataTable tr').eq(e).children().eq(1).text().trim(),
            opponent_name: $('.dataTable tr').eq(e).children().eq(3).text().replace(/\d/g,'').trim(),
            opponent_stats: $('.dataTable tr').eq(e).children().eq(3).text().replace(/[A-Za-z\n]/g,'').trim(),
            result: $('.dataTable tr').eq(e).children().eq(7).text().replace('\n','').trim(),
            score: $('.dataTable tr').eq(e).children().eq(8).text().replace(/[\n\/\d]/g,'').trim(),
            round: $('.dataTable tr').eq(e).children().eq(8).text().replace(/[\nA-Z]/g,'').trim(),
            points: jQuery('.responseLessDataTable tr').eq(12).text().trim().split(' ')[0].replace(/\D/g,''),
            age: jQuery('.responseLessDataTable tr').eq(14).text().trim().split(' ')[0].replace(/\D/g,'')
          };
          boxer_data.fight_list.push(fight)
        });
        /*
        setTimeout(() => {
          data = '[' + JSON.stringify(boxer_data)+ ']';
          if(data.length > 50) {
            fs.writeFile('public/data/' + boxer_id + '.json', data , err => {
              if(!err) {
                console.log('File for boxer ' + boxer_id + ' saved!')
              }
            })
          }
        }, 1000);
        */
      });
    })
  }
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
