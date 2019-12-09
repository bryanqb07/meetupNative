import { Router } from 'express';
import * as GroupController from './controller';

const routes = new Router();

routes.post("/groups", GroupController.createGroup);
routes.post("/groups/:groupId/meetup/new", GroupController.createGroupMeetup);
routes.get("/groups/:groupId/meetups", GroupController.getGroupMeetups);

export default routes;