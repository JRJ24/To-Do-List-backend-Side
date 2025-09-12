const Task = require('../models/task');

const getAllTasks = async () => {
    return await Task.find({}).populate('user');
}

const createTask = async (task) => {
    return await Task.create(task);
}

const updateTask = async (id, task) => {
    return await Task.findByIdAndUpdate(id, task);
}

const deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
}

module.exports.taskServices = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}