"use strict";



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Travels",
      [
        {
          title: "St Joe, Idaho",
          image_url: "https://i.imgur.com/yuWpcIo.jpg",
          map_url: "https://goo.gl/maps/fWqRdtW7iimMweAf8",
          trip_report: "Fishing on the St Joe River around Avery Idaho. Beautiful scenary and peacful.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "North Dakota Sun set",
          image_url: "https://i.imgur.com/xbXQ2H8.jpg",
          map_url: "https://goo.gl/maps/Z5HGdHpJn5nTcMNo8",
          trip_report: "Awesome sunset outside Flasher ND.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Napa Valley",
          image_url: "https://i.imgur.com/yprTfbw.jpg",
          map_url: "https://goo.gl/maps/ieaQrVxcAxSPUiug9",
          trip_report: "Loved it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};