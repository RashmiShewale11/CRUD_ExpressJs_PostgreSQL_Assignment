const uuid = require('uuid');
const { user } = require('../models');

exports.getAllUsers = (req, res) => {
    user.findAll({})
        .then((userData) => {
            return res.status(200).send({
                Output: userData
            });
        }).catch((err) => {
            return res.status(500).send({
                message: err.message || 'Error While Fetching the data'
            });
        });
}

exports.getUserById = (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        return res.status(400).send({
            message: 'userId not provided'
        });
    }
    user.findOne({
        where: {
            userId: userId
        }
    })
        .then((userData) => {
            return res.status(200).send({
                Output: userData || `No Data Present for Id: ${userId}`
            });
        }).catch((err) => {
            return res.status(500).send({
                message: err.message || `Error While Fetching the data`
            });
        });
}

exports.postUser = (req, res) => {
    if (!(req.body.username && req.body.age && req.body.hobbies)) {
        return res.status(400).send({
            message: "user name, age and hobbies are required "
        });
    }

    const userInputData = {
        id: uuid.v4(),
        username: req.body.username,
        age: req.body.age,
        hobbies: req.body.hobbies
    }

    user.create(userInputData)
        .then((data) => {
            return res.status(200).send({
                message: 'User Created',
                Output: data
            });
        }).catch((err) => {
            return res.status(500).send({
                message: err.message || 'Error While Inserting the data'
            });
        });
}

exports.updateUserById = (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
        return res.status(400).send({
            message: 'userId not provided'
        });
    }

    const userInputData = {
        id: uuid.v4(),
        username: req.body.username,
        age: req.body.age,
        hobbies: req.body.hobbies
    }

    user.findOne({
        where: {
            userId: userId
        }
    })
        .then((userData) => {
            if (!userData) {
                return res.status(400).send({
                    messgae: `No Data Present for Id: ${userId}`
                });
            }
            user.update(userInputData, {
                where: {
                    userId: userId
                }
            }).then((updatedData) => {
                return res.status(200).send({
                    message: `${updatedData} User Updated`
                });
            }).catch((err) => {
                return res.status(500).send({
                    message: err.message || `Error While Updating the data`
                });
            });
        }).catch((err) => {
            return res.status(500).send({
                message: err.message || `Error While Fetching the data`
            });
        });
}

exports.deleteUserById = (req, res) => {
    const userId = req.params.userId;

    if (!userId) {
        return res.status(400).send({
            message: 'userId not provided'
        });
    }


    user.findOne({
        where: {
            userId: userId
        }
    })
        .then((userData) => {
            if (!userData) {
                return res.status(400).send({
                    messgae: `No Data Present for Id: ${userId}`
                });
            }
            user.destroy({
                where: {
                    userId: userId
                }
            }).then((Data) => {
                return res.status(200).send({
                    message: `${Data} User Deleted`
                });
            }).catch((err) => {
                return res.status(500).send({
                    message: err.message || `Error While Deleting the data`
                });
            });
        }).catch((err) => {
            return res.status(500).send({
                message: err.message || `Error While Fetching the data`
            });
        });
}