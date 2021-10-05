const pool = require("./db");

pool.query("SELECT * FROM public.film LIMIT 10",(err, res)=>{

    try{
        console.log(res.rows);        
    }catch(err){
        console.error(err.message);
    }
    
});
pool.end();


