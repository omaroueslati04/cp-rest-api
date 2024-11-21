const express=require('express');
const User=require('../models/User');
const router=express.Router();

router.post('/add-user',async(req,res)=>{
    try{
       const{name,email,password}=req.body;
       const newuser=await User.create({name,email,password});
       res.status(200).send({message:"user ajoute succefuly a la base donne ", User:newuser});
    }
    catch(err){
        res.status(400).send({message:"erreur lors de l'ajout du user "});

    }
});


router.get('/',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).send({message:"voici la liste des users", users:users});
        }
    catch(err){
        res.status(400).send({message:"erreur lors de l'affichage des users"});

    }
    
});

router.get('/:_id',async(req,res)=>{
    try{
        const usertofind=await User.findOne(req.params);
        res.status(200).send({message:"user trouvée", user:usertofind});
        }
    catch(err){
        res.status(400).send({message:"erreur lors de la recherche des users"});

    }
        
    
});

router.delete('/delete-user/:_id',async(req,res)=>{
    try{
        const usertodelete= await User.findOneAndDelete(_id=req.params._id);
        if(!usertodelete)
            res.status(400).send({message:"user non trouve! "});
        else
        res.status(200).send({message:"user supprimeé"});
        }
    catch(err){
        res.status(400).send({message:"erreur lors de la suppression  du user"});

    }

    
});
router.put('/update-user/:_id',async(req,res)=>{
    try{
       const{name,email,password}=req.body;
       const userupdated= await User.findByIdAndUpdate(req.params._id,{name,email,password},{new:true});
       if(!userupdated)
            res.status(400).send({message:"user non trouve! "});
        else
            res.status(200).send({message:"user modifiee",user:userupdated});
        }
    catch(err){
        res.status(400).send({message:"erreur lors de la modification  du user"});

            }
});





































module.exports=router;