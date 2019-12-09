import Group from './model';
import { Meetup } from '../meetups';

export const createGroup = async (req, res) => {
    const { name, description } = req.body;
    if(!name){
        return res.status(400).json({ error: true, message: "Name must be provided" });
    } else if (typeof name !== "string"){
        return res.status(400).json({ error: true, message: "Name must be text only" });    
    } else if (name.length < 5) {
        return res.status(400).json({ error: true, message: "Name must be > 5 chars" });
    }

    if(!description){
        return res.status(400).json({ error: true, message: "Description must be provided" });
    } else if (typeof description !== "string"){
        return res.status(400).json({ error: true, message: "Description must be text only" });    
    } else if (description.length < 10) {
        return res.status(400).json({ error: true, message: "Description must be > 10 chars" });
    }

    const group = new Group({ name, description });

    try{
        return res.status(201).json({ group: await group.save()});
    } catch(err) {
        return res.status(400).json({ error: true, message: "Error when creating group" });
    }

};

export const createGroupMeetup = async (req, res) => {
    const { title, description } = req.body;
    const { groupId } = req.params;

    if (!title) {
        return res.status(400).json({ error: true, message: "Title must be provided" });
    } else if (typeof title !== "string") {
        return res.status(400).json({ error: true, message: "Title must be text only" });
    } else if (title.length < 5) {
        return res.status(400).json({ error: true, message: "Title must be > 5 chars" });
    }

    if (!description) {
        return res.status(400).json({ error: true, message: "Description must be provided" });
    } else if (typeof description !== "string") {
        return res.status(400).json({ error: true, message: "Description must be text only" });
    } else if (description.length < 10) {
        return res.status(400).json({ error: true, message: "Description must be > 10 chars" });
    }

    if(!groupId){
        return res.status(400).json({ error: true, message: "Group id must be provided" });   
    }

    try {
        const { meetup, group } = await Group.addMeetup(groupId, { title, description });
        return res.status(201).json({ error: false, meetup, group });
    } catch (err) {
        return res.status(400).json({ error: true, message: err.message });
    }
};

export const getGroupMeetups = async (req, res) => {
    const { groupId } = req.params;

    if (!groupId) {
        return res.status(400).json({ error: true, message: "Group id must be provided" });
    }

    const group = await Group.findById(groupId);

    if (!group) return res.status(400).json({ error: true, message: "Group does not exist" });

    try{
        return res.status(200).json({ 
            error: false, 
            meetups: await Meetup.find({ group: groupId }).populate('group', 'name')
        });
    } catch(err){
        return res.status(400).json({ error: true, message: err.message });
    }
};