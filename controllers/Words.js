'use strict';

const utils = require('../utils/writer.js');
const Words = require('../service/WordsService');

module.exports.wordsGET = function wordsGET (req, res, next) {
  Words.wordsGET()
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        res.writeHead(response.code);
        res.end();
      });
};