"use strict";

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
	const tokens = sequelize.define(
		"tokens",
		{
			token: { type: DataTypes.TEXT },
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: user,
					key: "id"
				}
			}
		},
		{}
	);
	tokens.associate = function (models) {
		// associations can be defined here
	};
	return tokens;
};
