const Service = require("../../Services/Room");
import { errorResponse, successResponse } from "../../helpers";

export const allRooms = async (request, response) => {
	try {
		const resp = await Service.getAllRooms(request.body);
		if (resp.success) {
			return successResponse(response, "Successfully get rooms", resp);
		} else {
			return errorResponse(response, "rooms listing failed", 200);
		}
	} catch (e) {
		return errorResponse(response, "rooms listing failed", 400, e);
	}
};

export const create = async (request, response) => {
	try {
		const resp = await Service.create(request.body);
		if (resp.success) {
			return successResponse(response, "room created successfully", resp);
		} else {
			return errorResponse(response, "Failed to create room.", 200);
		}
	} catch (e) {
		return errorResponse(response, "room creation failed", 400, e);
	}
};
