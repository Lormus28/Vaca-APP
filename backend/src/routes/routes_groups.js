import express from 'express';
import { groupPost, groupList } from '../controller/controller_groups.js';


export const groups = express.Router();

groups.get('/groups',groupList);
groups.post('/groups',groupPost);