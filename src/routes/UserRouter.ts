import express from 'express';
import { AddUser, UpdeteUser, DeleteUser, GetAllUsers,GetUserMsgs } from '../controller/UserController';
import validate from '../middleware/ValidateMW';
import { UserSchema } from '../schemas/ZodSchema';

const router = express.Router();

// TODO: router.get()

router.post('/adduser',validate(UserSchema),AddUser);
router.put('/updateuser/:id',validate(UserSchema),UpdeteUser);
router.delete('/deleteuser/:id',DeleteUser);
router.get('/allusers',GetAllUsers);
router.get('/getusermsgs/:id',GetUserMsgs)
export default router;