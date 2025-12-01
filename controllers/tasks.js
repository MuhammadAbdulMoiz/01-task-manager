const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper( async (req, res)=>{
    const tasks = await Task.find({});
    res.send({ tasks });
})

const createTask = asyncWrapper( async (req, res)=>{
    const task = await Task.create(req.body);
    if (!task){
        return res.status(500).json({ error: 'Task creation failed' });
    }
    return res.status(201).json({ task });
})

const getTask = asyncWrapper( async (req, res)=>{
    const { id: TaskID } = req.params;
    const task = await Task.findOne({ _id: TaskID });
    if (!task){
        return res.status(404).json({ error: `No Task with id ${TaskID}` });
    }
    return res.status(200).json({ task });
})

const updateTask = asyncWrapper( async (req, res)=>{
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {new: true , runValidators: true });
    if (!task){
        return res.status(404).json({ error: 'Task Not Updtaed' });
    }
    return res.status(200).json({ task });
})

const deleteTask = asyncWrapper( async (req, res)=>{
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskID });
    if (!task){
        return res.status(404).json({ error: `No Task with id ${TaskID}` });
    }
    return res.status(200).json({ task: null, status: 'success' });
})

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};