import { allGroups } from "../services/service_groups.js";

export const groupList = (req,res)=>{
const groupResult = allGroups();
res.status(200).json(groupResult);
}

export const groupPost = (req,res)=>{};