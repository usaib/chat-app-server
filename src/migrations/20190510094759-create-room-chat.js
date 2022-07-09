module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable("room_chats", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			room: {
				type: Sequelize.INTEGER,
				references: {
					model: "rooms",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			},
			text: {
				type: Sequelize.TEXT
			},
			from: {
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
	down: (queryInterface, Sequelize) => queryInterface.dropTable("room_chats")
};
