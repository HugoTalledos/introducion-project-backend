const express = require('express');
const router = express.Router();

const Topic = require('../models/topics');

router.get('/', async (req, res) => {
   const topics = await Topic.find();
   res.json(topics);
});

router.get('/:id', async (req, res) => {
    const topic = await Topic.findById(req.params.id);
    res.json(topic);
})

router.post('/', async (req, res) => {
    const { title, description, date_added, father }= req.body;
    const topic = new Topic({title, description, date_added, father});
    await topic.save();
    res.json({status: 'ok'});
});

router.put('/:id', async (req, res) => {
    const { title, description, date_added, father }= req.body;
    const newTopic =  { title, description, date_added, father };
    await Topic.findByIdAndUpdate(req.params.id, newTopic);
    res.json({status: 'success'});
});

router.delete('/:id', async (req, res) => {
    await Topic.findByIdAndRemove(req.params.id);
    res.json({status: 'delete'});
})

module.exports = router;