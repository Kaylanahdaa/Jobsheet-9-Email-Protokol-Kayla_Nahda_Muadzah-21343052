// Import modul 'express' dan buat objek router
const router = require("express").Router();

// Import fungsi 'signup' dan 'getbill' dari file 'appController.js'
const { signup, getbill } = require("../controller/appController.js");

/** HTTP Reqeust */
// Definisikan endpoint POST '/user/signup' yang akan menjalankan fungsi 'signup' saat dipanggil
router.post("/user/signup", signup);

// Definisikan endpoint POST '/product/getbill' yang akan menjalankan fungsi 'getbill' saat dipanggil
router.post("/product/getbill", getbill);

// Ekspor objek router untuk digunakan di file lain
module.exports = router;
