var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request')
var cheerio = require('cheerio');


let fighter = () => {
  let boxer = {
    name: $('.singleColumn h1').text(),
    wins: $('.profileTablePhoto .bgW').text(),
    KOs: $('.profileTablePhoto .textWon').text(),
    loss: $('.profileTablePhoto .bgL').text(),
    KOd: $('.profileTablePhoto .textLost').text(),
    draws: $('.profileTablePhoto .bgD').text(),
    fight_list: []
  }
  $('.dataTable .drawRowBorder').map((e, i) => {
      fight = {
        fight_date: $('.dataTable .drawRowBorder').eq(e).children().eq(1).text().trim(),
        weight: $('.dataTable .drawRowBorder').eq(e).children().eq(2).text().trim(),
        opponent_name: $('.dataTable .drawRowBorder').eq(e).children().eq(5).text().replace(/\d/g,'').trim(),
        opponent_stats: $('.dataTable .drawRowBorder').eq(e).children().eq(5).text().replace(/[A-Za-z\n]/g,'').trim().split(/\s/g),
        result: $('.dataTable .drawRowBorder').eq(e).children().eq(11).text().trim(),
        score: $('.dataTable .drawRowBorder').eq(e).children().eq(12).text().replace(/[\n\/\d]/g,'').trim(),
        round: $('.dataTable .drawRowBorder').eq(e).children().eq(12).text().replace(/[\nA-Z]/g,'').trim().split('/')[0],
        points: Number($('.dataTable .drawRowBorder').eq(e).children().eq(3).text().trim().split('➞')[1].replace(',',''))
      };
      boxer.fight_list.push(fight);
  });
  document.body.innerHTML = JSON.stringify(boxer);
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
