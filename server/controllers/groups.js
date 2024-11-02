const { body, validationResult } = require('express-validator');
const Question = require('../models/question');
const User = require('../models/user');
const Group = require('../models/group')
exports.createGroup = async (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const errors = result.array({ onlyFirstError: true });
        return res.status(422).json({ errors });
    }
    try {
        const { name } = req.body
        const author = req.user.id
        let admin = []
        admin.push(author)
        const group = await Group.create({
            name,
            admin,
            author
        })
        res.status(201).json(group)
    }
    catch (error) {
        next(error);
    }
}
exports.listGroup = async (req, res, next) => {
    try {
        const { sortType = '-created' } = req.body;
        const groups = await Group.find().sort(sortType)
        res.json(groups)
    } catch (error) {
        next(error)
    }
}
exports.validateGroup = [
    body('name')
        .exists()
        .trim()
        .withMessage('Name group exited')
        .notEmpty()
        .withMessage('cannot be blank')
]