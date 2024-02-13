const router = require('express').Router();
const users = require('../controllers/users.controller');

module.exports = (app) =>{
    router.get('/', users.getAllUsers);
    router.get('/:userId', users.getUserById);
    router.post('/',users.postUser);
    router.put('/:userId', users.updateUserById);
    router.delete('/:userId', users.deleteUserById);
    
    app.use('/users', router);
};