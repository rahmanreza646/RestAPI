import express from 'express';
import { addBook, getAllBooks, getOneBook } from '../controllers/user.controller.js';
const routers =express.Router();


routers.get('/',getAllBooks);
routers.get('/getall/',getAllBooks);
routers.get('/:id',getOneBook);
routers.post('/',addBook);

export default routers;