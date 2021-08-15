const express = require("express");
const router = express.Router();
const renderServices = require("../services/render")
const controller = require("../controller/controller");



//  @description Root route
// @method GET
router.get('/' , renderServices.homRoute);

//  @description adduser route
// @method GET
router.get('/add-user' , renderServices.adduser);

//  @description updateuser route
// @method GET
router.get('/update-user' , renderServices.updateuser);

// Api
router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
