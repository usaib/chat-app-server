module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			email: {
				type: Sequelize.STRING
			},
			gender: {
				type: Sequelize.ENUM("Male", "Female")
			},
			password: {
				type: Sequelize.STRING
			},
			contactNumber: {
				type: Sequelize.STRING
			},
			age: {
				type: Sequelize.STRING
			},

			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable("users")
};
