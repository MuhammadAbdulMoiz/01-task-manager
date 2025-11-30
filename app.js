const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./db_connect/connection');
require('dotenv').config();

//middleware
app.use(express.json());

//Routes
app.get('/', (req, res) =>{
    res.send('Task Manager API');
})
app.use('/api/v1/tasks', taskRoutes);

const port = 3000;
const start = async ()=> {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        })
    }
    catch(error){
        console.log(error);
    }
}
start(); 

