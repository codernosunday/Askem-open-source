const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupModel = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    avartar: {
        type: String, default: function () {
            return `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`
        }
    },
    name: { type: String, required: true },
    user: [{ type: String, required: false }],
    question: [{ type: String, required: false }],
    admin: [{ type: String, required: true }],
    waitPost: [{ type: String, required: false }],
    created: { type: Date, default: Date.now }
})
groupModel.set('toJSON', { getters: true });
groupModel.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret };
    delete obj._id;
    delete obj.__v;
    return obj;
};
module.exports = mongoose.model('group', groupModel);