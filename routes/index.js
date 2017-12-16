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

let fight_list = () => {
  var fight_list = [];
  $('.dataTable .drawRowBorder').map((e, i) => {
      const points = $('.dataTable .drawRowBorder').eq(e).children().eq(3).text().trim().split('➞')[1]
      fight = {
        fight_date: $('.dataTable .drawRowBorder').eq(e).children().eq(1).text().trim(),
        weight: $('.dataTable .drawRowBorder').eq(e).children().eq(2).text().trim(),
        opponent_name: $('.dataTable .drawRowBorder').eq(e).children().eq(5).text().replace(/\d/g,'').trim(),
        opponent_stats: $('.dataTable .drawRowBorder').eq(e).children().eq(5).text().replace(/[A-Za-z\n]/g,'').trim().split(/\s/g),
        result: $('.dataTable .drawRowBorder').eq(e).children().eq(11).text().trim(),
        score: $('.dataTable .drawRowBorder').eq(e).children().eq(12).text().replace(/[\n\/\d]/g,'').trim(),
        round: $('.dataTable .drawRowBorder').eq(e).children().eq(12).text().replace(/[\nA-Z]/g,'').trim(),
        points: Number(points.replace(',',''))
      };
      fight_list.push(fight);
  });
  console.table(fight_list);
};





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
