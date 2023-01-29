import { Router } from "express";
import { getAll, getOne } from "../controllers/PostController";

const router = new Router()


//Get all posts
router.get('/', getAll)

//Get post by id
router.get('/:id', getOne)