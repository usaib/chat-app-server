"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert(
			"users",
			[
				{
					name: "Sadaf Ishtiaq",
					email: "sadaf@gmail.com",
					password: "827ccb0eea8a706c4c34a16891f84e7b",
					gender: "Female",
					age: "45",
					contactNumber: "03312266871",
					createdAt: new Date(),
					updatedAt: new Date()
				}
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
		return queryInterface.dropTable("users");
	}
};
