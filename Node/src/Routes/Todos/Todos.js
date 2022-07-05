const express = require('express')
const router = express.Router()

// sql connection file helper
const { Connection, executeStatement } = require('../../Helpers/sql_connect');


// get list of all todos
router.get('/', async (req, res) => {
    try {
        const result = await executeStatement(`SELECT * FROM [TodosDatabase].[dbo].[Todos]`);
        console.log("result from Todos===================================", result);
        res.send("ok");
    } catch (e) {
        res.status(404);
        res.send("failed")
    }
});

module.exports = router;