const mysql = require("mysql");

var instance = mysql.createConnection({
    host: "localhost",
    port: "3045",
    user: "root",
    password: "123456789"
});

instance.connect(async (error) => {
    if (error != null)
        throw error;
    else
        console.log("Connected");
});

var sql = "SELECT `id`, `name`, `district`, `population` "
        + "FROM world.city "
        + "ORDER BY `id` DESC "
        + "LIMIT 10, 5 "
        + "; -- SELECT"
; // sql

instance.query(sql, async (error, resultset) => {
    if (error != null)
        throw error;
    else
        console.table(resultset);
});
