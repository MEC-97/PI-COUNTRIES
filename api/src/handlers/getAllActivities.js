const { getAllActivities } = require('../controllers/getActivity');


const getAllActivitiesHandler = async (req,res) => {
    try {
        const response = await getAllActivities();
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports= { getAllActivitiesHandler } ;