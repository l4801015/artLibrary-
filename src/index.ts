import * as mysql from 'mysql';

var con = mysql.createConnection({
  host: "localhost",
  user: "u0_a292",
  password: "qwerty"
});

type DB = 
  | { type: "create db", name: (n: string) => typeof n }
  | { type: "show db" }
  | { type: "error", data: "error" }

const map = (action: DB): string => {

  switch (action.type) {
    case 'create db' :
      con.connect((err) => {
        if (err) throw err;
         con.query('CREATE DATABASE [IF NOT EXISTS] images')
    });
    case "show db" :
      con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SHOW DATABASES", function (err, result) {
    if (err) throw err;
    console.log({result});
  });
});
      return 'databases was showed'
      
  }
}
map({type: 'show db'})





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
