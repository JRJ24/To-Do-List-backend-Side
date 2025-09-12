const {taskServices} = require('./services');
const {Response} = require('../common/response');
const debug = require('debug')('app:taskController');
const createError = require('http-errors');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskServices.getAllTasks();
        Response.success(res, 200, 'Tasks retrieved successfully', tasks);

    } catch (error) {
        debug(error);
        Response.error(res, error);
    }
}

const createTask = async(req, res) =>{
    try {
        const task = await taskServices.createTask(req.body);
        Response.success(res, 200, 'Task created successfully', task);
    } catch (error) {
        debug(error);
        Response.error(res, error);
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const taskData = req.body;
        const task = await taskServices.updateTask(id, taskData);
        Response.success(res, 200, 'Task updated successfully', task);
    } catch (error) {
        debug(error);
        Response.error(res, error);
    }
}

const deleteTask = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await taskServices.deleteTask(id);
        Response.success(res, 200, 'Task deleted successfully', task);
    } catch (error) {
        debug(error);
        Response.error(res, error);
    }
}

module.exports.taskController = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}
