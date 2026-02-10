import express from "express";
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

// admin route for login
adminRouter.post("/login", adminLogin);

// admin route for getting all Comments
adminRouter.get('/comments', auth, getAllComments);

// admin route for getting all Blogs
adminRouter.get('/blogs', auth, getAllBlogsAdmin);

// admin route for deleting comment by ID
adminRouter.post('/delete-comments', auth, deleteCommentById);

// admin route for approving comments by ID
adminRouter.post('/approve-comments', auth, approveCommentById);

// admin route for getting dashboard data
adminRouter.get('/dashboard', auth, getDashboard);

export default adminRouter;