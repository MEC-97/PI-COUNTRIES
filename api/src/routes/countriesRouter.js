const { Router } = require("express")
const { getCountries } = require("../handlers/getCountries")
const { getCountrieId } = require("../handlers/getCountriesId")
//const { getCountriesName } = require("../handlers/getCountriesByName")
const countriesRouter = Router()



countriesRouter.get("/", getCountries)
countriesRouter.get("/:id", getCountrieId)
//countriesRouter.get("/:name", getCountriesName)



module.exports = countriesRouter