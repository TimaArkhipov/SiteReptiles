import { Router } from "express";
import { getAll } from "../controllers/PostController";

const router = new Router()


//Get all posts
router.get('/', getAll)