'use strict';

const {database} = require("./Database");


exports.wordsGET = async (tag) => {
  const words = await database("word")
      .select("*").where("tag","=",tag);

  for(let i=0; i<words.length; i++) {
    words[i].date = words[i].date.toISOString().slice(0,10)
  }

  return words;
};

exports.tagsGET = async () => {
  return (await database("word").select("tag").distinct());
};

