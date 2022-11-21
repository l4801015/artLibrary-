"use strict";
exports.__esModule = true;
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "u0_a292",
    password: "qwerty"
});
var map = function (action) {
    switch (action.type) {
        case 'create db':
            con.connect(function (err) {
                if (err)
                    throw err;
                con.query('CREATE DATABASE [IF NOT EXISTS] images');
            });
        case "show db":
            con.connect(function (err) {
                if (err)
                    throw err;
                con.query('SHOW DATABASE');
            });
            return 'databases was showed';
    }
};
map({ type: 'show db' });
//const createDB = (name: string) => ("CREATE DATABASE " + name);
//
//con.connect((err) => {
//  if (err) throw err;
//  console.log("Connected!");
//  con.query(createDB('myDB'), (err, result) => {
//    if (err) throw err;
//    console.log("Database created");
//    return 
//  });
//  return
//});
//
