const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.get("/", (req, res) => {
    db.query(`SELECT * FROM memo`, (err, rows) => {
        res.send(rows);
    });
});

router.post("/create", (req, res) => {
    const params = [req.body.color, req.body.pageX, req.body.pageY];
    db.query(
        `INSERT INTO memo(color, pageX, pageY) VALUES(?, ?, ?)`,
        params,
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
    const params = [req.query.color, parseInt(req.query.id)];
    db.query(`UPDATE memo SET color = ? WHERE id = ?`, params, err => {
        if (err) throw err;
    });
});

router.get("/position", (req, res) => {
    const params = [req.query.pageX, req.query.pageY, req.query.id];
    db.query(
        "UPDATE memo SET pageX = ?, pageY = ? WHERE id = ?",
        params,
        err => {
            if (err) throw err;
            res.send("success");
        }
    );
});

router.put("/", (req, res) => {
    const params = [req.body.text, parseInt(req.body.id)];
    db.query(`UPDATE memo SET text = ? WHERE id = ?`, params, err => {
        if (err) throw err;
        res.send("success");
    });
});

router.get("/delete", (req, res) => {
    const params = [parseInt(req.query.id)];
    db.query(`DELETE FROM memo WHERE id = ?`, params, err => {
        if (err) throw err;
        res.send("success");
    });
});

router.delete("/all", (req, res) => {
    db.query(`DELETE FROM memo`, err => {
        if (err) throw err;
        res.send("success");
    });
});

router.get("/filter", (req, res) => {
    const params = [req.query.color];
    db.query(`SELECT * FROM memo WHERE COLOR = ?`, params, (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
