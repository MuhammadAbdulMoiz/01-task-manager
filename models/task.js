const moongoose = require('mongoose');

const TaskSchema = new moongoose.Schema({ 
    name: {
        type: String,
        required: [true, 'Task name is required'],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = moongoose.model('Task', TaskSchema);