const {Router} = require('express');

const  { postActivitiesHandler } = require('../handlers/postActivity');
const { getAllActivitiesHandler } = require('../handlers/getAllActivities');

const activitiesRouter = Router();

activitiesRouter.post('/', postActivitiesHandler);
activitiesRouter.get('/',getAllActivitiesHandler);

module.exports = activitiesRouter;