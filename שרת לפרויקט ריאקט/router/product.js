const express = require('express');
const router = express.Router();
const controllerProduct = require('../controller/product');

const upload=require('../middleWares/upload');

router.get("/", controllerProduct.get);
router.get("/:id", controllerProduct.getById);
router.post("/",upload.single('image'), controllerProduct.post);
router.put("/:id",controllerProduct.put);
router.delete("/:id", controllerProduct.delete);



module.exports = router;