const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.get("/", (req, res) => {
    const table = ["memo"];
    db.query(`SELECT * FROM ??`, table, (err, rows) => {
        res.send(rows);
    });
});

router.post("/create", (req, res) => {
    const table = "memo";
    const columns = ["color", "pageX", "pageY"];
    const params = [req.body.color, req.body.pageX, req.body.pageY];
    db.query(
        `INSERT INTO ${table}(??) VALUES(?)`,
        [columns, params],
        (err, rows) => {
            if (err) throw err;
            res.send({
                text: "",
                color: `${req.body.color}`,
                id: rows.insertId,
                pageX: req.body.pageX,
                pageY: req.body.pageY,
            });
        }
    );
});

router.get("/color", (req, res) => {
    const param1 = { color: req.query.color };
    const param2 = { id: parseInt(req.query.id) };
    db.query(`UPDATE memo SET ? WHERE ?`, [param1, param2], err => {
        if (err) throw err;
    });
});

router.get("/position", (req, res) => {
    const param1 = { pageX: req.query.pageX };
    const param2 = { pageY: req.query.pageY };
    const param3 = { id: req.query.id };
    db.query("UPDATE memo SET ?, ? WHERE ?", [param1, param2, param3], err => {
        if (err) throw err;
        res.send("success");
    });
});

router.put("/", (req, res) => {
    const postid = parseInt(req.body.id);
    const param1 = { text: req.body.text };
    const param2 = { id: postid };
    db.query(`UPDATE memo SET ? WHERE ?`, [param1, param2], err => {
        if (err) throw err;
        res.send("success");
    });
});

router.get("/delete", (req, res) => {
    const params = { id: parseInt(req.query.id) };
    db.query(`DELETE FROM memo WHERE ?`, params, err => {
        if (err) throw err;
        res.send("success");
    });
});

router.delete("/all", (req, res) => {
    const columns = ["memo"];
    db.query(`DELETE FROM ?`, columns, err => {
        if (err) throw err;
        res.send("success");
    });
});

router.get("/filter", (req, res) => {
    const params = { color: req.query.color };
    db.query(`SELECT * FROM memo WHERE ?`, params, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
