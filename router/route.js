
const express = require('express');
const router = require('express').Router();
const User = require("../Model/userSchema");
 require("../DB/conn");



// GET all users
router.get('/events',  async(req, res) => {

  try {

    const usersData = await User.find();
    res.send(usersData);
    
  } catch (error) {
    res.send(usersData)
    
  }

});

// GET single users

router.get('/events/:id',async (req,res)=>{

  try {

    const _id = req.params.id;
    const userData = await User.findById(_id);

    if(!userData){
      return res.status(404).send()
    }else{
      res.send(userData)

    }
    
  } catch (error) {
    res.send(error)
    
  }
})

// Post single user
router.post('/events',async (req,res)=>{

  try {
    const user = new User(req.body)
    const CreateUser = await  user.save()
    res.status(201).send(CreateUser)

  } catch (e){res.status(400).send(e)}
    
})


// Edit User
router.put('/events/:id',async (req,res)=>{

  try {
    const _id = req.params.id;
    const updateUserData = await User.findByIdAndUpdate(_id,req.body,{
      new:true
    });
res.send(updateUserData)
  } catch (error) {
  res.status(404).send(error)
    
  }
})

// Delete user
router.delete('/events/:id',async (req,res)=>{

  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      return res.status(404).send()
    }else{
      res.send(deleteUser)
    }

  } catch (error) {
  res.status(500).send(error)
    
  }
})


module.exports = router;
