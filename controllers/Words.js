'use strict';

const utils = require('../utils/writer.js');
const Words = require('../service/WordsService');


module.exports.wordsGET = function wordsGET (req, res, next) {
    const tag = req.swagger.params['tag'].value;
    const date = req.swagger.params['date'].value;
  Words.wordsGET(tag,date)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        res.writeHead(response.code);
        res.end();
      });
};

module.exports.tagsGET = function tagsGET (req, res, next) {
    Words.tagsGET()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            res.writeHead(response.code);
            res.end();
        });
};

module.exports.datesGET = function datesGET (req, res, next) {
    const tag = req.swagger.params['tag'].value;
    Words.datesGET(tag)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            res.writeHead(response.code);
            res.end();
        });
};