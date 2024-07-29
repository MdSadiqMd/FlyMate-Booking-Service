const { StatusCodes } = require("http-status-codes");

const { logger } = require("../config/logger.config");
const AppError = require("../errors/App.error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error(`Error in creating data in crud Repository: ${error}`);
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      if (!response) {
        throw new AppError(
          "Not able to fund the resource",
          StatusCodes.NOT_FOUND
        );
      }
      return response;
    } catch (error) {
      logger.error(`Error in getting data in crud Repository: ${error}`);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error(`Error in getting All data in crud Repository: ${error}`);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error(`Error in updating data in crud Repository: ${error}`);
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      if (!response) {
        throw new AppError(
          "Not able to fund the resource",
          StatusCodes.NOT_FOUND
        );
      }
      return response;
    } catch (error) {
      logger.error(`Error in deleting data in crud Repository: ${error}`);
      throw error;
    }
  }
}

module.exports = CrudRepository;
