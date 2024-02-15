import express from 'express'
import {isAdmin, requiresignIn} from '../middleware/authMiddleware.js'
import {createCategoryController,updateCategoryController,categoryController,singleCategoryController,deleteCategoryController} from '../controllers/CreateCategoryController.js'

const router = express.Router()
//routes
router.post('/create-category',requiresignIn,isAdmin,createCategoryController)
// update categories
router.put('/update-category/:id',requiresignIn,isAdmin,updateCategoryController)
//get all categories
router.get('/get-category',categoryController)
router.get('/single-category/:slug',singleCategoryController)
//delete Category
router.delete('/delete-category/:id',requiresignIn,isAdmin,deleteCategoryController)



export default router
