//film
const pool = require("./db");

pool.query("UPDATE public.film SET description = $1 WHERE film_id = 4",['Wincyr Was Here'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();