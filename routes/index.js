const express = require('express');
const db = require('../db/index')
const router = express.Router();

router.get ('/', (req, res, next) => {
    res.json({
        Name: 'Biscuits Industrial API',
        Description: `API system for public and the website that is provided.`,
        Provider: 'SkippTekk',
        DiscordInvite: 'kksqmuu',
        Version: 'N/A',

    });
});
router.get('/invTypes', async (req,res, next) => {
    try{
        let results = await db.all(req.params.all);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;