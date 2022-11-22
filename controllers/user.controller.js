import idAutoIncrement from "id-auto-increment";
import { bookModel } from "../models/book.model.js";
export const getAllBooks=(req,res)=>{
    bookModel.find((err,val)=>{
        if(!err){
            res.json(val);
        } else{
            console.log(err);
        }});
};

export const getOneBook=(req,res)=>{
    const fetchId=req.params.id;
    bookModel.find(({id:fetchId}),(err,val)=>{
        if(!err){
            res.json(val);
        }else{
            console.log(err);
        }
    });
    
};

 export const addBook=async (req,res)=>{
    try{
        const data=new bookModel({
            id:await idAutoIncrement(),
            book_name:req.body.book_name,
            author:req.body.author,
            page:req.body.page
    });
    

    const val=await data.save();
    res.json(val);
    }
    catch(err){
        console.log(err);
        res.status(500);
    }  

};
