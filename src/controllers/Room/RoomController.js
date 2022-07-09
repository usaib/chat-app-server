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

export const getRoomChat = async (request, response) => {
	try {
		const resp = await Service.getRoomChat(request.body);
		if (resp.success) {
			return successResponse(response, "Successfully get room's chat", resp);
		} else {
			return errorResponse(response, "failed to get chat", 200);
		}
	} catch (e) {
		return errorResponse(response, "failed to get chat", 400, e);
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

export const createRoomChat = async (request, response) => {
	console.log(request.body);
	try {
		const resp = await Service.createRoomChat(request.body);
		if (resp.success) {
			return successResponse(response, "room chat created successfully", resp);
		} else {
			return errorResponse(response, "Failed to create room chat room.", 200);
		}
	} catch (e) {
		return errorResponse(response, "room chat creation failed", 400, e);
	}
};
