require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const Task = require('./models/model');
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO)
.then(()=>console.log("Connected to databse"))
.catch((error)=>console.log(error.message));
app.post('/tasks',async (req,res)=>{
    try{
        const task = new Task({
            title : req.body.title,
            description : req.body.description,
            completed : req.body.completed,
            createdAt : req.body.createdAt,
            priority : req.body.priority
        })
        const savedTask = await task.save();
        return res.status(200).send(savedTask+" uploaded successfully");
    }catch(error){
        return res.status(500).json({
            error:error.message
        });
    }
});
app.get('/getTasks',async(req,res)=>{
    try{
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    }catch(error){
        return res.status(500).json({
            error:error.message
        });
    }
});
app.get('/getCompleted',async(req,res)=>{
    try{
        const tasks = await Task.find({completed : true});
        return res.status(200).json(tasks);
    }catch(error){
        return res.status(500).json({
            error:error.message
        });
    }
});
app.delete('/delete/:id',async(req,res)=>{
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if (!deleteTask){
            return res.status(404).json({message : "Task not found"});
        }
        return res.status(200).send(deleteTask+" deleted successfully");
    }catch(error){
        res.status(500).json({error:error.message});
    }
})
app.patch('/update/:id',async(req,res)=>{
    try{
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        );
        if (!updateTask){
            res.status(404).send("Task not found");
        }
        res.status(200).json(updateTask);
    }catch(error){
        return res.status(400).json({
            error:error.message
        });
    }
});
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Listening to Port ${PORT}`)
})