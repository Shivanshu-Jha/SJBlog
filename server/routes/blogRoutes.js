import express from 'express';
import { addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish, addComment, getBlogComments, generateContent } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

// route to add a new blog
blogRouter.post('/add', upload.single('image'), auth, addBlog);

// route to get all blogs
blogRouter.get('/all', getAllBlogs);

// route to get a blog by ID
blogRouter.get('/:blogId', getBlogById);


// route to delete a blog by ID
blogRouter.post('/delete', auth, deleteBlogById);

// route to toggle blog publish status
blogRouter.post('/toggle-publish', auth, togglePublish);

// route to add blog comment
blogRouter.post('/add-comment', addComment);

// route to get all blog comments
blogRouter.post('/comments', getBlogComments);

// route to generate content using google gemini
blogRouter.post('/generate', auth, generateContent);

export default blogRouter;