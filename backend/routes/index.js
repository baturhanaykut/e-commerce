const express = require("express");
const router = express.Router();

//! Diğer Rota Dosyalarını İçe Aktaraıyoruz.
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

//! Her rotayı ilgili yol altında kullanıyoruz.
router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;