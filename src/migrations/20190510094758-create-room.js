module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("rooms", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			createdBy: {
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
	down: (queryInterface, Sequelize) => queryInterface.dropTable("rooms")
};
