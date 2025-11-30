const Task = require('../models/task');

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.find({});
        res.send({ tasks });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createTask = async (req, res)=>{
    try {
        const task = await Task.create(req.body);
        if (!task){
            return res.status(500).json({ error: 'Task creation failed' });
        }
        return res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getTask = async (req, res)=>{
    try {
        const { id: TaskID } = req.params;
        const task = await Task.findOne({ _id: TaskID });
        if (!task){
            return res.status(404).json({ error: `No Task with id ${TaskID}` });
        }
        return res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateTask = async (req, res)=>{
    try {
        const { id: TaskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {new: true , runValidators: true });
        if (!task){
            return res.status(404).json({ error: 'Task Not Updtaed' });
        }
        return res.status(200).json({ task });
    }
    catch (error) {

    }
    res.json({id: req.params.id});
}

const deleteTask = async (req, res)=>{
    try {
        const { id: TaskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: TaskID });
        if (!task){
            return res.status(404).json({ error: `No Task with id ${TaskID}` });
        }
        return res.status(200).json({ task: null, status: 'success' });
    }
    catch (error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};