const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/customError');

const getAllTasks = asyncWrapper( async (req, res)=>{
    const tasks = await Task.find({});
    res.send({ tasks });
})

const createTask = asyncWrapper( async (req, res, next)=>{
    const task = await Task.create(req.body);
    if (!task){
        return next(createCustomError('Task not created', 500));
    }
    return res.status(201).json({ task });
})

const getTask = asyncWrapper( async (req, res, next)=>{
    const { id: TaskID } = req.params;
    const task = await Task.findOne({ _id: TaskID });
    if (!task){
        return next(createCustomError(`No Task with id ${TaskID}`, 404));
    }
    return res.status(200).json({ task });
})

const updateTask = asyncWrapper( async (req, res, next)=>{
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, {new: true , runValidators: true });
    if (!task){
        return next(createCustomError(`No Task with id ${TaskID}`, 404));
    }
    return res.status(200).json({ task });
})

const deleteTask = asyncWrapper( async (req, res, next)=>{
    const { id: TaskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskID });
    if (!task){
        return next(createCustomError(`No Task with id ${TaskID}`, 404));
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