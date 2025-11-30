const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

//middleware
app.use(express.json());

//Routes
app.get('/', (req, res) =>{
    res.send('Task Manager API');
})

app.use('/api/v1/tasks', taskRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})