const express = require('express');
const db = require('../db/index')
const router = express.Router();

router.get ('/', (req, res, next) => {
    res.json({
        Name: 'Biscuits Industrial API',
        Description: `API system for public and the website that is provided.`,
        Provider: 'SkippTekk',
        DiscordInvite: 'kksqmuu',
        Version: '1.0',

    });
});
router.get('/invTypes', async (req,res, next) => {
    try{
        let results = await db.invTypes(req.params.invTypes);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get('/tables', async (req,res, next) => {
    try{
        let results = await db.tables(req.params.tables);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get(`/s/:id`, async (req,res, next) => {
    try{
        let results = await db.ships(req.params.id);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get(`/ships/:id`, async (req,res, next) => {
    try{
        let results = await db.ships(req.params.id);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get(`/i/:id`, async (req,res, next) => {
    try{
        let results = await db.id(req.params.id);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get(`/items/:id`, async (req,res, next) => {
    try{
        let results = await db.id(req.params.id);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get(`/b/:id`, async (req,res, next) => {
    try{
        let results = await db.build(req.params.id + ` blueprint`);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get(`/build/:id`, async (req,res, next) => {
    try{
        let results = await db.build(req.params.id + ` blueprint`);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
router.get('/navbar', async (req,res, next) => {
    try{
        let results = await db.navbar(req.params.navbar);
        res.json(results);
    } catch (e){
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;