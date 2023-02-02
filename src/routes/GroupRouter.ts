import express from 'express';
import {CreateGroup , UpdateGroupName, DeleteGroup, getGroupmsgs, GetAllGroups} from '../controller/GroupController';
import validate from '../middleware/ValidateMW';
import { GroupSchema } from '../schemas/ZodSchema';

const router = express.Router();

router.post('/creategroup',validate(GroupSchema),CreateGroup);
router.put('/updategroupname/:id',validate(GroupSchema),UpdateGroupName);
router.delete('/deletegroup/:id',DeleteGroup);
router.get('/allgroups',GetAllGroups);
router.get('/getgroupmessages/:id',getGroupmsgs);


export default router;
