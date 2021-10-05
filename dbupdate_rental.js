const pool = require("./db");

pool.query("UPDATE public.rental SET rental_date = $1 WHERE rental_id = 4",['2001-03-11 10:20:30'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();