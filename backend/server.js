const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

// Create database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        return;
    }
    console.log('Connected to the database');
});


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`full_name`, `mobile_no`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.full_name,
        req.body.mobile_no,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.json("error");
        }
        return res.json(data);
    });
});

app.post('/', (req, res) => {
    const { email_or_mobile, password } = req.body;
    const sql = "SELECT * FROM login WHERE (`email` = ? OR `mobile_no` = ?) AND `password` = ?";
    db.query(sql, [email_or_mobile, email_or_mobile, password], (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.json("error");
        }

        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});


// Start server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
