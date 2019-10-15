'use strict';

const {database} = require("./Database");
const _ = require("lodash");


/**
 * Returns a preview of all the books filtered by keyword.
 *
 * keyword String A keyword to match the book to. (optional)
 * genre String The genre to filter the book by. (optional)
 * theme String The theme to search the book by. (optional)
 * offset Long Offset with regards to the current page. (optional)
 * limit Long Items per page. (optional)
 * returns List
 **/
exports.wordsGET = async () => {
  let books;

  //format the response
  const result = [];
  for(let i=0; i<books.length; i++) {
    result[i] = {
      "book_id" : books[i].book_id,
      "book" : _.pick(books[i], ["title", "current_price", "imgpath","abstract"])
    }
  }

  return result;
};

