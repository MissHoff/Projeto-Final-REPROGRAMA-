const express = require('express');
const controller = require('../controller/blogcontroller');


const router = express.Router();



router.get("/all", controller.getPosts)
router.get("/:id", controller.getPostById)
router.post("/add", controller.addNewPost)
router.patch("/:id", controller.changePost)
router.delete("/:id", controller.deletePost )

module.exports = router;    