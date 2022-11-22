import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/mydb", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true

},(err)=>{
     if(!err){
        console.log("connected to db");
    }else{
        console.log(err);
    }
}); 

///schema 
const schema=
{
    id: String,
    book_name: String,
    author: String,
    page:String
    
}
export const bookModel=mongoose.model("k_books",schema);