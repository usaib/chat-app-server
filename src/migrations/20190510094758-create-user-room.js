module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("user_rooms", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			roomId: {
				type: Sequelize.INTEGER,
				references: {
					model: "rooms",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: "users",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
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
	down: (queryInterface, Sequelize) => queryInterface.dropTable("user_rooms")
};
