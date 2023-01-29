import { Router } from "express";
import router from "./servers";
import { getAll } from "../controllers/PostController";

//Get all posts
router.get('/', getAll)