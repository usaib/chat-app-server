import { users } from "../../models";
const Service = require("../../Services/User");
import { errorResponse, successResponse } from "../../helpers";

export const allUsers = async (request, response) => {
	try {
		const resp = await Service.getAllUsers(request.body);
		if (resp.success) {
			return successResponse(response, "Successfully get users", resp);
		} else {
			return errorResponse(response, "Users listing failed", 200);
		}
	} catch (e) {
		return errorResponse(response, "Users listing failed", 400, e);
	}
};

export const create = async (request, response) => {
	console.log(request.body);
	try {
		const { email } = request.body;

		const user = await users.findOne({
			where: { email }
		});
		if (user) {
			return successResponse(
				response,
				"User Already Exists.",
				resp,
				(success = false)
			);
			return;
		}
		const resp = await Service.create(request.body);
		if (resp.success) {
			return successResponse(response, "User created successfully", resp);
		} else {
			return errorResponse(response, "Failed to create user.", 200);
		}
	} catch (e) {
		return errorResponse(response, "User creation failed", 400, e);
	}
};

export const remove = async (request, response) => {
	try {
		const resp = await Service.remove(request.body);
		if (resp.success) {
			return successResponse(response, "user deleted successfully", resp);
		} else {
			return errorResponse(response, "Failed to delete user.", 200);
		}
	} catch (e) {
		return errorResponse(response, "Failed to delete user.", 400, e);
	}
};
export const update = async (request, response) => {
	try {
		const { email } = request.body;
		let users;
		if (email) {
			const users = await user.findOne({
				where: { email }
			});
		}
		if (users) {
			return successResponse(
				response,
				"User Already Exists.",
				resp,
				(success = false)
			);
			return;
		}
		const resp = await Service.update(request.body);
		if (resp.success) {
			return successResponse(response, "user updated successfully", resp);
		} else {
			return errorResponse(response, "Failed to update user.", 200);
		}
	} catch (e) {
		return errorResponse(response, "Failed to update user.", 400, e);
	}
};

export const getProfile = async (request, response) => {
	try {
		const resp = await Service.getProfile(request.body);
		if (resp.success) {
			return successResponse(
				response,
				"user's profile fetched successfully",
				resp
			);
		} else {
			return errorResponse(response, "Failed to get user's profile.", 200);
		}
	} catch (e) {
		return errorResponse(response, "Failed to update user.", 400, e);
	}
};
