'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'example@gmail.com',
        password: '123456',
        firstName: 'John',
        lastName: 'Doe',
        address: 'VietNam',
        gender: 1,
        roleId: 'R1',
        phoneNumber: '0123123123',
        positionId: 'USA',
        image: 'doctor.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
