module.exports = (sequelize, DataTypes) => {
	const rooms = sequelize.define(
		"rooms",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			createdBy: {
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
	rooms.associate = function (models) {
		// associations can be defined here
	};

	return rooms;
};
