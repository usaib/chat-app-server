import { errorResponse, successResponse } from "../../helpers";

const Service = require("../../Services/Auth");

export const SignIn = async (request, response) => {
	try {
		const resp = await Service.SignIn(request.body);
		if (resp.success) {
			return successResponse(response, "Login Successfully", resp);
		} else {
			return errorResponse(
				response,
				"Login Failed",
				200,
				"Username or password is invalid."
			);
		}
	} catch (e) {
		return errorResponse(response, "Login Failed", 400, e);
	}
};

export const SignInWithGoogle = async (request, response) => {
	try {
		const resp = await Service.SignInWithGoogle(request.body);
		if (resp.success) {
			return successResponse(response, "Login Successfully", resp);
		} else {
			return errorResponse(
				response,
				"Login Failed",
				200,
				"Username or password is invalid."
			);
		}
	} catch (e) {
		return errorResponse(response, "Login Failed", 400, e);
	}
};
export const SignOut = async (request, response) => {
	try {
		const resp = await Service.SignOut(request.body);
		if (resp) {
			return successResponse(response, "Logout Successfully", resp);
		} else {
			return errorResponse(response, "Logout Failed", 200);
		}
	} catch (e) {
		return errorResponse(response, "Logout Failed", 400, e);
	}
};

export const Profile = async (req, response) => {
	try {
		const { userId } = req.user;
		const user = await user.findOne({ where: { id: userId } });
		return successResponse(response, "Successfully fetched Profile", resp);
	} catch (e) {
		return errorResponse(response, "Error in getting Profile", 400, e);
	}
};
