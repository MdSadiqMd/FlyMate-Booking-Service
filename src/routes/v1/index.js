const express = require("express");

const bookingRoutes = require("./booking.routes");

const router = express.Router();

router.use("/bookings", bookingRoutes);

module.exports = router;
