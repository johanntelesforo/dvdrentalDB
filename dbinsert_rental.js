//rental insert

const pool = require('./db');
const sql = `
INSERT INTO public.rental (rental_id, rental_date, inventory_id, customer_id, return_date, staff_id, last_update) 
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *`;

const data = [16050,'2017-08-26 14:49:45.738',2330, 555, '2017-10-26 14:49:45.738', 2, '2017-11-23 14:49:45.738'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});