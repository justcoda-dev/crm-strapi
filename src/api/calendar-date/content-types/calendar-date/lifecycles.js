const axios = require("axios");

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      const response = await axios.post(
        "http://localhost:3001/strapi/date-created",
        {
          result,
        }
      );
      return response;
    } catch (error) {
      console.error("Помилка при виконанні запиту:", error);
    }
  },
  async beforeDelete(event) {
    const { where } = event.params;
    try {
      const resposne = await axios.delete(
        `http://localhost:3001/strapi/date-created`,
        {
          data: { id: where.id },
        }
      );
      return resposne;
    } catch (error) {
      console.error("Помилка при виконанні запиту:", error);
    }
  },
};
