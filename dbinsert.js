const pool = require('./db');
const sql = `
INSERT INTO public.film (film_id, title, description, release_year, language_id) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *`;

const data = [1001,'PowerPuffCodes','Johann was here', 2021, 1];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});

pool.end();

pool.end();