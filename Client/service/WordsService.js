'use strict';

const {database} = require("./Database");


exports.wordsGET = async () => {
  const words = await database("word")
      .select("*");

  for(let i=0; i<words.length; i++) {
    words[i].date = words[i].date.toISOString().slice(0,10)
  }

  return words;
};

