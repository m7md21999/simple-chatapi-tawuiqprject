import express from 'express';
import {SendMsg , DeleteMsg , UpdateMsg} from '../controller/ChatController';
import validate from '../middleware/ValidateMW';
import { MessageSchema } from '../schemas/ZodSchema';

const router = express.Router();

router.post('/sendmessage',validate(MessageSchema),SendMsg);
router.delete('/deletemessage/:id',validate(MessageSchema),DeleteMsg);
router.put('/updatemessage/:id',validate(MessageSchema),UpdateMsg);
// router.get('/getusermessages/:id',GetUsermsgs);
// router.get('/allgroupmessages/:id',getGroupmsgs);

export default router;