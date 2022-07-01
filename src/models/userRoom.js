module.exports = (sequelize, DataTypes) => {
	const user_rooms = sequelize.define(
		"user_rooms",
		{
			roomId: {
				type: DataTypes.INTEGER,
				references: {
					model: "rooms",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			},
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: "users",
					key: "id"
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			}
		},
		{
			scopes: {}
		}
	);
	user_rooms.associate = function (models) {
		// associations can be defined here
	};

	return user_rooms;
};
