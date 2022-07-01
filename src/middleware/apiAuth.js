import { errorResponse } from "../helpers";
import { user } from "../models";

const jwt = require("jsonwebtoken");

const apiAuth = async (req, res, next) => {
	const authHeader = req.headers["authorization"];
	console.log(authHeader);
	if (!(req.headers && authHeader)) {
		return res.status(401).json({
			message: "Token is not provided"
		});
	}
	const token = authHeader && authHeader.split(" ")[1];
	try {
		const decoded = jwt.verify(token, process.env.SECRET);
		req.user = decoded.user;
		console.log(decoded);
		const User = await user.findOne({
			where: { email: req.user.email }
		});
		if (!User) {
			return errorResponse(res, "User not found", 401);
		}
		const reqUser = { ...User.get() };
		reqUser.userId = User.id;
		req.user = reqUser;
		console.log(req.user);
		return next();
	} catch (error) {
		return errorResponse(res, "Incorrect token is provided, try re-login", 401);
	}
};

export default apiAuth;
