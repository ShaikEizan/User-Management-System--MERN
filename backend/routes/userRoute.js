const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/userModel");
const router = express.Router();

// create
router.post("/new" , async (req ,res) => {
    const {name , email ,age} = req.body;
    console.log(req.body);
    try {
        const userAdded = await User.create({
            name : name,
            email : email,
            age : age,
        });
        console.log(userAdded);
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({error : error.message})   
    }
});

// get
router.get("/", async (req ,res ) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);  
    } catch (error) {
        console.log(error);
        res.status(500).json({error : error.message});
    }
});

// get single user
router.get("/:id", async (req ,res ) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById({_id : id});
        res.status(200).json(singleUser);  
    } catch (error) {
        console.log(error);
        res.status(500).json({error : error.message});
    }
});

//delete  
router.delete("/:id", async (req ,res ) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findByIdAndDelete({_id : id});
        res.status(200).json(singleUser);  
    } catch (error) {
        console.log(error);
        res.status(500).json({error : error.message});
    }
});

//Put 
router.put("/:id", async (req ,res ) => {
    const { id } = req.params;
    // const { name,email,age } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id , req.body, {new : true });
        res.status(200).json(updateUser); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error : error.message});
    }
});

// post
// router.post("/new", async (req ,res ) => {
//     // const { name,email,age } = req.body;
//     console.log(req.body);
//     try {
//         const newUser = new User(req.body);
//         console.log(newUser);
//         const saveUser = await newUser.save();
//         console.log(saveUser);
//         res.status(200).json(saveUser); 
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error : error.message});
//     }
// });

module.exports = router;