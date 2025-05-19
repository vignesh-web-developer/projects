const express = require('express')
const mysql = require('mysql2')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jesus@21',
    database: 'smartbanker'
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
});


app.post('/api/filter-accounts', (req, res) => {
    const { accountType, holderType, bank } = req.body;

    console.log(req.body)
  
    // Basic validation
    if (!accountType || !holderType || !Array.isArray(bank) || bank.length === 0) {
      return res.status(400).json({ error: 'Missing or invalid filters' });
    }
  
    const placeholders = bank.map(() => '?').join(', '); // creates (?, ?, ?) based on length
    const query = `
      SELECT ad.*, b.name AS bank_name, at.account_type AS account_type, ht.holder_type AS holder_type
      FROM account_details ad
      JOIN banks b ON ad.bank_id = b.id
      JOIN account_types at ON ad.account_type_id = at.id
      JOIN holder_types ht ON ad.holder_type_id = ht.id
      WHERE at.account_type = ? AND ht.holder_type = ? AND b.name IN (${placeholders})
    `;

  
  
    const params = [accountType, holderType, ...bank];

    db.query(query, params, (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

  
      res.json(results);
    });
  });

app.post('/api/filter-loans', (req, res) => {
  const { loanType, bank} = req.body;

  console.log(req.body)

  if (!loanType  || !Array.isArray(bank) || bank.length === 0) {
    return res.status(400).json({ error: 'Missing or invalid filters' });
  }

  const placeholders = bank.map(() => '?').join(', ');
  const query = `
   SELECT 
      b.name AS bank_name,
      lt.loan_type,
      lt.description AS loan_description,
      ld.interest_rate,
      ld.processing_fee,
      ld.foreclosure_charges,
      ld.processing_duration
    FROM loan_details ld
    JOIN banks b ON ld.bank_id = b.id
    JOIN loan_types lt ON ld.loan_type_id = lt.id
    WHERE lt.loan_type = ?
      AND b.name IN (${placeholders})
  `;

  const params = [loanType, ...bank];
  db.query(query, params, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    console.log(results)

    res.json(results);
  });
})
  
  