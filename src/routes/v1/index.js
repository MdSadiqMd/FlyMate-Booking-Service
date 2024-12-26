const express = require("express");

const bookingRoutes = require("./booking.routes");
const { info } = require("../../controllers/info.controller");

const router = express.Router();

router.use("/bookings", bookingRoutes);
router.get("/info", info);

module.exports = router;
