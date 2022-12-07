import express from 'express';

import { commentPost,getPostsBySearch, getPost, getPosts, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch)
router.get('/:id', getPost)
router.get('/', getPosts);
router.post('/', auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/commentPost', auth, commentPost);

router.patch('/:id/likePost', auth, likePost);
export default router;