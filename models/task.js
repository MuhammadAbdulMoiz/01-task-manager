const moongoose = require('mongoose');

const TaskSchema = new moongoose.Schema({ 
    name: {
        type: String,
        required: [true, 'Task name is required'],
        trim: true,
        maxlength: [20, 'Task name cannot be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = moongoose.model('Task', TaskSchema);