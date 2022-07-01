const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		username: "root",
		password: "root",
		database: "my_home_v1",
		host: "localhost",
		dialect: "mysql"
	});
}

// sequelize.sync({ force: true });

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================
// console.log(db);
db.users.hasMany(db.tokens);
db.tokens.belongsTo(db.users);
db.users.belongsToMany(db.rooms, { through: db.user_rooms });
db.rooms.belongsToMany(db.users, { through: db.user_rooms });

module.exports = db;
