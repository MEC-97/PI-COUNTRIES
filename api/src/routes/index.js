const { Router } = require("express");
const countriesRouter = require("./countriesRouter")
const activityRouter = require("./activityRouter")


 const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 router.use("/countries", countriesRouter);
 router.use("/activities", activityRouter);

// router.get('/', (req, res)=> {
//     res.send('Soy el get de /Videogame')
//   });



module.exports = router;
