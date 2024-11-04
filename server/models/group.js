const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const questionSchema = require('./questionGroup');
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
    mode: { type: Boolean, required: false, default: false }, // true : private false: public
    name: { type: String, required: true },
    user: [{ type: String, required: false }],
    question: [{ type: String, required: false }],
    waitList: [{ type: String, required: false }],
    admin: [{ type: String, required: true }],
    created: { type: Date, default: Date.now }
})
groupModel.methods = {
    addWaitList: function (question) {
        this.waitList.push(question);
        return this.save();
    },
    addQuestion: function (question) {
        this.question.push(question);
        return this.save();
    }
}
groupModel.set('toJSON', { getters: true });
groupModel.options.toJSON.transform = (doc, ret) => {
    const obj = { ...ret };
    delete obj._id;
    delete obj.__v;
    return obj;
};
module.exports = mongoose.model('group', groupModel);