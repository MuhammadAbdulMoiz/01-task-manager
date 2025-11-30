const getAllTasks = (req, res)=>{
    res.send('list of all tasks');
}

const createTask = (req, res)=>{
    res.send('task created');
}

const getTask = (req, res)=>{
    res.send(`get task with id `);  
}

const updateTask = (req, res)=>{
    res.send(`update task with id `);  
}

const deleteTask = (req, res)=>{
    res.send(`delete task with id `);  
}

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};