const express = require("express");
const router = express.Router();
const renderServices = require("../services/render")



//  @description Root route
// @method GET
router.get('/' , renderServices.homRoute);

//  @description adduser route
// @method GET
router.get('/add-user' , renderServices.adduser);

//  @description updateuser route
// @method GET
router.get('/update-user' , renderServices.updateuser);

module.exports = router;
