const express = require('express');
const router = express.Router();

const { taskController } = require('./controller');



module.exports.taskAPIRoutes = (app) => {
    router 
        .get('/', taskController.getAllTasks) 
        .post('/create', taskController.createTask) 
        .put('/update/:id', taskController.updateTask) 
        .delete('/delete/:id', taskController.deleteTask);  
    
    app.use('/tasks', router);
}