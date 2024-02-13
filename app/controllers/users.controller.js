const users = require('../services/users.service');

exports.getAllUsers = users.getAllUsers;
exports.getUserById = users.getUserById;
exports.postUser = users.postUser;
exports.updateUserById = users.updateUserById;
exports.deleteUserById = users.deleteUserById;