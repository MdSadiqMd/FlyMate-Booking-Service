const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");

const { Booking } = require("../models");
const CrudRepository = require("./crud.repository");
const { Enums } = require("../utils");
const { CANCELLED, BOOKED } = Enums.BOOKING_STATUS;

class BookingRepository extends CrudRepository {
  constructor() {
    super(Booking);
  }

  async createBooking(data, transaction) {
    const response = await Booking.create(data, { transaction: transaction });
    return response;
  }

  async get(data, transaction) {
    const response = await Booking.findByPk(data, { transaction: transaction });
    if (!response) {
      throw new AppError(
        "Not able to get the transaction data",
        StatusCodes.NOT_FOUND
      );
    }
    return response;
  }
}

module.exports = BookingRepository;
