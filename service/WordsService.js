'use strict';

const {database} = require("./Database");


exports.wordsGET = async (tag, date) => {
  return (await database("word")
      .select("*")
      .whereRaw("tag = ? and date = ?",[tag,new Date(date)])
      .orderBy("frequency","desc")
      .limit(50));
};

exports.tagsGET = async () => {
  return (await database("word").select("tag").distinct());
};

exports.datesGET = async (tag) => {
  const dates =  await database("word").select("date").where("tag","=",tag).distinct();

  for(let i=0; i<dates.length; i++) {
    dates[i].date = dates[i].date.toDateString();
  }

  return dates;
};
