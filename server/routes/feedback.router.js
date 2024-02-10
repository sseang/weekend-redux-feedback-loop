const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
  console.log(`POST /feedback req.body:`, req.body);
  const sqlData = req.body;
  console.log('NEW SQL DATA:', sqlData);

  const sqlText = `
  INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);
  `;
  const sqlValues = [
    sqlData.feeling,
    sqlData.understanding,
    sqlData.support,
    sqlData.comments,
  ];

  pool
    .query(sqlText, sqlValues)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding FEEDBACK`, error);
      res.sendStatus(500);
    });
});

// TODO: This route RESETS for new feedback. See TODO for "TRUNCATE"
router.delete('/', (req, res) => {});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
  console.log('testing');
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
