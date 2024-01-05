// Import modul Express.js untuk membuat server web
const express = require("express");

// Import modul yang berisi definisi rute atau endpoint
const appRoute = require("./routes/route.js");

// Membuat aplikasi Express
const app = express();

// Menetapkan variabel PORT untuk menentukan nomor port server
const PORT = process.env.PORT || 4000;

// Menggunakan middleware express.json() untuk mengenali format data JSON dalam permintaan HTTP
app.use(express.json());

// Menggunakan rute yang telah diimpor dari appRoute
// Semua permintaan yang diarahkan ke "/api" akan ditangani oleh rute-rute di dalam appRoute
app.use("/api", appRoute);

// Memulai server dan mendengarkan pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
