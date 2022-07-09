module.exports = (sequelize, DataTypes) => {
	const room_chats = sequelize.define(
		"room_chats",
		{
			room: {
				type: DataTypes.INTEGER,
				references: {
					model: "rooms",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			},
			from: {
				type: DataTypes.STRING,
				allowNull: false
			},
			text: {
				type: DataTypes.TEXT
			}
		},
		{
			scopes: {}
		}
	);
	room_chats.associate = function (models) {
		// associations can be defined here
	};

	return room_chats;
};
